/**
 * Created by s6627 on 11/3/2016.
 */
Ext.define('Atlas.formulary.model.MDBDrugSearchModel', {
    extend: 'Atlas.common.model.Base',
    //extend: 'Atlas.common.model.StaticBase',
    fields: [
        {name: 'adminRoute', type: 'string'},
        {name: 'allergyPattern', type: 'int'},
        {name: 'brandName', type: 'string'},
        {name: 'clinicPack ', type: 'string'},
        {name: 'DEAClass', type: 'string'},
        {name: 'deleteDate', type: 'date', dateFormat: 'Y-m-d'},
        {name: 'descAbbr', type: 'string'},
        {name: 'DESI', type: 'string'},
        {name: 'dispenseUnit ', type: 'string'},
        {name: 'dollarRank', type: 'string'},
        {name: 'dosageForm', type: 'string'},
        {name: 'drugName', type: 'string'},
        {name: 'extTCC', type: 'int'},
        {name: 'formType ', type: 'string'},
        {name: 'genericIDNum', type: 'int'},
        {name: 'genericIDType', type: 'string'},
        {name: 'GPPC', type: 'string'},
        {name: 'HFPGInd', type: 'string'},
        {name: 'IDNum ', type: 'string'},
        {name: 'inactiveDate', type: 'date', dateFormat: 'Y-m-d'},
        {name: 'innerPack', type: 'string'},
        {name: 'intExt', type: 'string'},
        {name: 'itemStatus', type: 'string'},
        {name: 'labelerCode ', type: 'string'},
        {name: 'labelerType', type: 'string'},
        {name: 'lastChange', type: 'int'},
        {name: 'lastModified', type: 'date', dateFormat: 'Y-m-d'},
        {name: 'localSystem', type: 'string'},
        {name: 'ltdDistCode ', type: 'string'},
        {name: 'mntDrugCode', type: 'string'},
        {name: 'multiSource', type: 'string'},
        {name: 'nameExt', type: 'string'},
        {name: 'NDC', type: 'string'},
        {name: 'newEffDate ', type: 'int'},
        {name: 'newNDC', type: 'string'},
        {name: 'newNDCFormatted', type: 'string'},
        {name: 'numSysChar', type: 'string'},
        {name: 'nxtLargeSuffix', type: 'string'},
        {name: 'nxtSmallSuffix', type: 'string'},
        {name: 'oldEffDate', type: 'int'},
        {name: 'oldNDC ', type: 'string'},
        {name: 'oldNDCFormatted', type: 'string'},
        {name: 'packageDesc', type: 'string'},
        {name: 'packageQty', type: 'int'},
        {name: 'packageSize', type: 'string'},
        {name: 'packageUM ', type: 'string'},
        {name: 'PPGInd', type: 'string'},
        {name: 'pricingSpread', type: 'string'},
        {name: 'productName', type: 'string'},
        {name: 'recordCode', type: 'string'},
        {name: 'recordVersion ', type: 'int'},
        {name: 'reimburseInd', type: 'string'},
        {name: 'repackage', type: 'string'},
        {name: 'restricted', type: 'string'},
        {name: 'RxOTC', type: 'string'},
        {name: 'RxRank ', type: 'int'},
        {name: 'secondIDForm', type: 'string'},
        {name: 'secondIDNum', type: 'string'},
        {name: 'sequence', type: 'string'},
        {name: 'singleComb', type: 'string'},
        {name: 'stability', type: 'string'},
        {name: 'storageCond', type: 'int'},
        {name: 'strength ', type: 'string'},
        {name: 'strengthUM', type: 'string'},
        {name: 'systemID', type: 'string'},
        {name: 'TEE', type: 'string'},
        {name: 'therapeuticClass', type: 'int'},
        {name: 'ttlPackQty ', type: 'string'},
        {name: 'unitDose', type: 'string'},
        {name: 'wrdidx', type: 'string'},
        {name: 'GPICode', type: 'string'},
        {name: 'GPIName', type: 'string'},
        {name: 'DrugType ', type: 'string'},
        {name: 'OTC', type: 'string'},
        {name: 'Formularies', type: 'string'},
        {name: 'AWPUnit',type: 'number'},
        {name: 'AWPPkg ',type: 'number'},
        {name: 'WACUnit', type: 'number'},
        {name: 'WACPkg', type: 'number'},
        {name: 'FUL', type: 'number'},
        {name: 'MAC', type: 'number'},
        {name: 'mrktEntryDate', type: 'string'},
        {name: 'rxcui', type: 'string'},
        {name: 'MaintFlag', type: 'boolean'},
        {name: 'MaintFlagYesNo', type: 'string',
            calculate: function (data) {
                return (data.MaintFlag == true ? 'Yes' : 'No');
            }
        },
        {name: 'CoverageGapDrug', type: 'string'},
        {name: 'avgIngYtd', type: 'string'},
        {name: 'totRxYtd', type: 'string'},
        {name: 'totQtyYtd', type: 'string'},
        {name: 'totIngYtd ', type: 'string'},
        {name: 'mktRxYtd', type: 'string'},
        {name: 'mktQtyYtd', type: 'string'},
        {name: 'mktIngYtd', type: 'string'},
        {name: 'FormuIdVersionList', type: 'string'}
    ],
    proxy: {
        extraParams: {
            "pKeyType":"NDC",
            "pKeyValue":"69916010590",
            "pSearchInitiative":"",
            "pFormulary":"52|1",
            "pGPILevel":"12",
            pagination: true,
            timeout: 500000
        },
        url: 'formulary/{0}/mdbdrugsearch',
        reader: {
            type    : 'json',
            rootProperty    : 'data'
        }
    }
});