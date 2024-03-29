Ext.define('Atlas.atlasformulary.view.umprograms.StepTherapyConfig', {
    extend: 'Atlas.atlasformulary.view.drugsearch.DrugSearch',
    controller: 'steptherapyconfig',
    title: 'Step Therapy Configuration',
    viewModel: 'steptherapyconfig',

    enableHierarchyToggle: false,

    initComponent: function () {
        var vm = this.getViewModel();
        vm.set('programSK', this.programSK);
        vm.set('StepCnt', this.StepCnt);
        vm.set('drugListSK', this.drugListSK);
        vm.set('mode', this.mode);
        vm.set('titleMode', this.titleMode);
        //vm.set('formularyStatus', this.formularyStatus);
        vm.set('drugRefDbName', this.drugRefDbName);

        if (!this.drugRefDbName || this.drugRefDbName === 'FDB') {
            vm.set('dataSource', 'fdb');
        } else if (this.drugRefDbName === 'Medispan') {
            vm.set('dataSource', 'medispan');
        }

        this.callParent();
    }
});
