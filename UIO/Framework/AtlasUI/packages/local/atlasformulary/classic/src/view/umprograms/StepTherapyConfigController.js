Ext.define('Atlas.atlasformulary.view.umprograms.StepTherapyConfigController', {
    extend: 'Atlas.atlasformulary.view.drugsearch.DrugSearchController',
    alias: 'controller.steptherapyconfig',

    require: [
        'Ext.window.Toast'
    ],

    rulesPanel: null,
    stepTherapyDetailsHeader: null,

    listen: {
        controller: {
            '*': {
                umCriteriaSaved: 'onUmCriteriaSaved'//,
                //drugListsPagedReloaded: 'drugListsPagedReloaded',
                //formularyCreateEditOpened: 'onFormularyCreateEditOpened',
                //formularyViewOpened: 'onFormularyViewOpened',
                //formularyApprovedOrRejected: 'onFormularyApprovedOrRejected'
            }
        }
    },

    loadingMsg: 'Loading...',
    workingMsg: 'Processing...',

    init: function (view) {
        var vm = this.getViewModel();

        vm.set('whichpage', 'StepTherapyConfig');

        this.createAndAddRules();
        this.createAndAddDetailsHeader();

        this.lookup('drugsearchexportbt').setHidden(true);

        this.getView().down('#criteriaClearButton').on('click', function () {
            this.clear(false);
        }, this);

        this.callParent(view);
    },

    // onFormularyCreateEditOpened: function () {
    //     if (this.getViewModel().get('mode') !== 'view') {
    //         this.getView().destroy();
    //     }
    // },

    // onFormularyViewOpened: function () {
    //     if (this.getViewModel().get('mode') === 'view') {
    //         this.getView().destroy();
    //     }
    // },

    // onFormularyApprovedOrRejected: function () {
    //     this.getView().destroy();
    // },

    // drugListsPagedReloaded: function () {
    //     var vm = this.getViewModel(),
    //         store = vm.getStore('drugs');
    //
    //     for (var i = store.getCount() - 1; i > -1; i--) {
    //         var record = store.data.items[i];
    //         if (vm.get('selectedDrugCategorySK')) {
    //             if (vm.get('formularyStatus') === 'Approved') {
    //                 if (record.data.DrugCatgSK !== vm.get('selectedDrugCategorySK')) {
    //                     store.remove(record);
    //                 }
    //             }
    //         }
    //     }
    // },

    onRuleSelected: function (params) {
        var vm = this.getViewModel();

        if (params.drugCategorySK) {
            vm.set('selectedDrugCategorySK', params.drugCategorySK);
            this.onClearFiltersClick();
            var criteria = Ext.create('Atlas.atlasformulary.model.Rule');
            criteria.set('property', 'DrugCatgSK');
            criteria.set('operator', '=');
            criteria.set('value', params.drugCategorySK);
            criteria.set('displayProperty', 'Selected Rule');
            criteria.set('displayValue', params.name);
            this.addToCriteriaStore(criteria);

            Atlas.atlasformulary.model.UMCriteria.load(params.drugCategorySK, {
                scope: this,
                success: function (record) {
                    var rulesPanelVm = this.rulesPanel.getViewModel();
                    rulesPanelVm.notify();
                },
                failure: function () {
                    Ext.toast('There was an error while attempting to retrieve coverage properties for the selected rule.');
                }
            });
        } else {
            vm.set('selectedDrugCategorySK', null);
            this.clear(true);
        }
    },

    clear: function (callClearFilters) {
        var vm = this.rulesPanel.getViewModel();

        this.getViewModel().set('selectedDrugCategorySK', null);
        this.rulesPanel.getController().clear();

        if (callClearFilters) {
            this.onClearFiltersClick();
        }
    },

    onSaveRuleClick: function () {
        var vm = this.getViewModel();

        if (vm.get('selectedDrugCategorySK')) {
            Ext.Msg.show({
                title: 'Confirm',
                message: 'Are you sure you want to update this rule?',
                buttons: Ext.Msg.YESNO,
                icon: Ext.Msg.QUESTION,
                scope: this,
                fn: function (btn) {
                    if (btn === 'yes') {
                        this.saveRule(vm.get('selectedDrugCategorySK'));
                    }
                }
            }, this);
        } else {
            this.saveRule();
        }
    },

    saveRule: function (drugCatgSK) {
        var vm = this.getViewModel(),
            currentCriteria = vm.getStore('criteria'),
            rulesPanelVm = this.rulesPanel.getViewModel(),
            ruleToSave = Ext.create('Atlas.atlasformulary.model.SaveDrugCategory'),
            criteriaToSave = [],
            criteria = Ext.create('Atlas.atlasformulary.model.SaveDrugCriteria');

        this.getView().up().mask(this.workingMsg);

        if (currentCriteria.getCount() > 0) {
            ruleToSave.set('DrugCatgSK', drugCatgSK);
            ruleToSave.set('UserId', Atlas.user.un);
            ruleToSave.set('CriteriaName', '');
            ruleToSave.set('FrmlrySK', vm.get('formularySK'));
            ruleToSave.set('CvrdInd', rulesPanelVm.get('coveredCheckBox'));
            ruleToSave.set('StepTherapyStepSK', rulesPanelVm.get('selectedStep'));

            currentCriteria.each(function (record) {
                if ((record.get('property') === 'ETC_ID' && record.get('value') === 0) || (record.get('property') === 'GPI' && record.get('value') === 0) || record.get('operator') === 'include') {
                    return;
                }

                criteria.set('ValQulfrCode', record.get('property'));
                criteria.set('OperTypeCode', record.get('operator'));
                criteria.set('CrtriaVal', record.get('value'));

                criteriaToSave.push(criteria.getData());
            });

            ruleToSave.set('tblRules', criteriaToSave);
            ruleToSave.save({
                scope: this,
                success: function (record, operation) {
                    var store = this.rulesPanel.getController().rulesGrid.getViewModel().getStore('rules');
                    store.getProxy().setExtraParam('isnewrequest', true);
                    store.reload({
                        scope: this,
                        callback: function (records, operation1, success) {
                            if (success) {
                                this.createRuleCache(parseInt(operation._response.responseText, 10), rulesPanelVm.get('selectedStep'));
                            } else {
                                this.getView().up().unmask();
                                Ext.toast('There was an error while attempting to save the rule.', 'Failure', 't');
                            }
                        }
                    });
                },
                failure: function () {
                    this.getView().up().unmask();
                    Ext.toast('There was an error while attempting to save the rule.', 'Failure', 't');
                }
            });
        }
    },

    createRuleCache: function (drugCategorySK, tierSK) {
        Atlas.atlasformulary.data.proxy.FormularyAjax.request({
            scope: this,
            url: Atlas.atlasformulary.service.EnvironmentURLUtil.getEnvironmentBaseURL() + '/drugcategorycache?drugcategorysk=' + drugCategorySK + '&drugtiersk=' + tierSK,
            method: 'POST',
            headers: {
                sessionid: Atlas.sessionId,
                username: Atlas.user.un
            },
            success: function () {
                this.getView().up().unmask();
                Ext.toast('The rule was saved.', 'Success', 't');
            },
            failure: function () {
                this.getView().up().unmask();
                Ext.toast('There was an error while attempting to save the rule.', 'Failure', 't');
            }
        });
    },

    onRuleDeleted: function () {
        this.getViewModel().set('selectedDrugCategorySK', null);
        this.onClearFiltersClick();
    },

    onShowUMCriteria: function () {
        var rulesPanelVm = this.rulesPanel.getViewModel(),
            vm = this.getViewModel(),
            coveredChecked = rulesPanelVm.get('coveredCheckBox'),
            selectedStepSK = rulesPanelVm.get('selectedStep');

        if (!vm.get('selectedDrugCategorySK')) {
            Ext.toast('Please select a rule before opening UM!');
            return;
        }

        var window = new Atlas.atlasformulary.view.umprograms.UMCriteriaPopUp({
            itemConfig: {
                tgtUserId: Atlas.user.un,
                tgtDrugCatgSK: vm.get('selectedDrugCategorySK'),
                tgtFrmlrySK: vm.get('formularySK'),
                tgtStepTherapyStepSK: selectedStepSK,
                tgtIsCovered: coveredChecked,
                tgtMode: vm.get('mode')
            }
        });
        window.show();
    },

    onUmCriteriaSaved: function () {
        var store = this.rulesPanel.getController().rulesGrid.getViewModel().getStore('rules');
        store.getProxy().setExtraParam('isnewrequest', true);
        store.reload();
    },
    onStepSelected: function (params) {
        this.onClearFiltersClick();
        this.fireEvent('deselectRule');
        this.getViewModel().set('selectedDrugCategorySK', null);
        var criteria = Ext.create('Atlas.atlasformulary.model.Rule');
        criteria.set('property', 'Step');
        criteria.set('operator', '=');
        criteria.set('value', params.stepNumber);

        this.addToCriteriaStore(criteria);
    },


    createAndAddRules: function () {
        var vm = this.getViewModel(),
            stepCnt = vm.get('StepCnt');
        this.rulesPanel = Ext.create({
            xtype: 'steptherapyconfig-rulespanel',

            viewModel: {
                data: {
                    formularySK: vm.get('formularySK'),
                    mode: vm.get('mode'),
                    formularyStatus: vm.get('formularyStatus')
                }
            }
        });
        var store = this.rulesPanel.getViewModel().getStore('steps');
        for(var i=1;i<(stepCnt+1);i++)
        {
            store.add({'Display':'Step '+i,'Value':i});
        }

        var eastRegion = this.lookupReference('drugsearch-eastregion');
        eastRegion.add(this.rulesPanel);
        eastRegion.show();

        this.rulesPanel.on('ruleSelected', this.onRuleSelected, this);
        this.rulesPanel.on('stepSelected', this.onStepSelected, this);
        this.rulesPanel.on('saveRuleClick', this.onSaveRuleClick, this);
        this.rulesPanel.on('ruleDeleted', this.onRuleDeleted, this);
        this.rulesPanel.on('showUMCriteria', this.onShowUMCriteria, this);
        this.rulesPanel.on('deselectRule', this.clear, this);
        this.rulesPanel.on('closeConfig', function () {
            this.getView().destroy();
        }, this);
    },

    createAndAddDetailsHeader: function () {
        var vm = this.getViewModel(),
            headerStore = Atlas.atlasformulary.model.StepTherapyHeader.load(vm.get('programSK')),
            headerRegion = this.lookupReference('drugsearch-northregion'),
            stepTherapyDetailsHeader = Ext.create({
                xtype: 'steptherapyconfig-steptherapydetailsheader',

                viewModel: {
                    data: {
                        stepTherapyHeader: headerStore,
                        dataSource: vm.get('dataSource')
                    }
                },
                flex: 1
            });

        headerRegion.add(stepTherapyDetailsHeader);
        headerRegion.show();
    }
});
