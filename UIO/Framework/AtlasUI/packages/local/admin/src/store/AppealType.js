/**
 * Created by d4662 on 11/29/2016.
 */
Ext.define('Atlas.admin.store.AppealType', {
    extend: 'Atlas.common.store.CloneStore',
    alias: 'store.admin-appealTypes',

    model: 'Atlas.common.model.shared.ListModel',
    autoLoad: true,
    proxy: {
        extraParams: {
            pListName: 'AppealType'
        },
        url: 'shared/{0}/listitems'
    }
});