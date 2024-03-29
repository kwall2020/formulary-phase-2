/**
 * Created by rsalekin on 11/24/2016.
 */
Ext.define('Atlas.pharmacy.model.Include', {
    extend: 'Atlas.common.model.Base',
    fields: [
        {name: 'zip', type: 'number'},
        {name: 'ncpdpId', type: 'string'},
        {name: 'Address', type: 'string'},
        {name: 'address2', type: 'string'},
        {name: 'city', type: 'string'},
        {name: 'rowNum', type: 'string'},
        {name: 'contractID', type: 'string'},
        {name: 'state', type: 'string'},
        {name: 'PharmacyName', type: 'string'}
    ],
    proxy: {
        extraParams: {
            pagination: true
        },
        url: 'pharmacy/{0}/pharmaciesbyridrest'
    }
});
