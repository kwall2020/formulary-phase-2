/**
 * This Class is the Model created for Pharmacy/Credentialing Module
 */

Ext.define('Atlas.pharmacy.model.PICLicenseInfo', {
    extend: 'Atlas.common.model.Base',
    fields: [
        {name: 'CreationSeq', type: 'string'},
        {name: 'PICExpDate', type: 'date', dateFormat: 'Y-m-d'},
        {name: 'updatedBy', type: 'date', dateFormat: 'Y-m-d'},
        {name: 'PICSAMAction', type: 'string'},
        {name: 'PICLicenseNum', type: 'string'},
        {name: 'PICVerfDate', type: 'date',  dateFormat: 'Y-m-d'},
        {name: 'updatedOn', type: 'date', dateFormat: 'Y-m-d'},
        {name: 'PICName', type: 'string'},
        {name: 'PICSAMVerfDate', type: 'date', dateFormat: 'Y-m-d'},
        {name: 'PICOIGVerfDate', type: 'date', dateFormat: 'Y-m-d'},
        {name: 'PICOIGAction', type: 'string'}
    ]
});