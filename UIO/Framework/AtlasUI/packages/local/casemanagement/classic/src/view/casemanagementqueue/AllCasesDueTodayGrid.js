/**
 * Created by mkorivi on 11/7/2016.
 */

Ext.define('Atlas.casemanagement.view.casemanagementqueue.AllCasesDueTodayGrid', {
    xtype: 'Casemanagement.AllCasesDueTodayGrid',
    extend: 'Ext.grid.Panel',
    listeners: {
        expand: 'ShowQueues'
    },
    columns:[
        {
            xtype: 'widgetcolumn',
            hideable : false,
            widget: {
                xtype: 'button',
                text: '',
                width:40,
                iconCls: 'fa fa-long-arrow-right',
                handler: 'onActionItemClick'
            }
        },
        {text:'Case ID', dataIndex:'MTMId'},
        {text:'Case Description', dataIndex:'description'},
        {text:'Status', dataIndex:'MTMStatus',hidden:true},
        {text:'Days Open', dataIndex:'DaysOpen',hidden:true},
        {text:'Referral Src.', dataIndex:'ReferralSource',hidden:true},
        {text:'Enroll Source', dataIndex:'EnrollSource',hidden:true},
        {text:'Enroll Reason', dataIndex:'EnrollReason',hidden:true},
        {text:'Recipient ID', dataIndex:'RecipientId',hidden:true},
        {text:'Case Mgr.', dataIndex:'caseManager'},
        {text:'Enroll Date', dataIndex:'EnrollDate',
            xtype: 'datecolumn',
            format:'m/d/Y'},
        {text:'Followup Date', dataIndex:'followupDate',  xtype: 'datecolumn',format:'m/d/Y'},
        {text:'Last Contact Date', dataIndex:'lastContactDate', xtype: 'datecolumn',format:'m/d/Y'},
        {text:'Goal For Next Contact', dataIndex:'goalForNextContact'},
        {text:'Member Name', dataIndex:'memberFullName'},
        {text:'Plan Name', dataIndex:'PlanGroupName'},
        {text:'Carrier', dataIndex:'CarrierName'},
        {text:'Account', dataIndex:'AccountName'},
        {text:'LOB', dataIndex:'LOBName'},
        {text:'Effective Date', dataIndex:'effDate',xtype: 'datecolumn', format:'m/d/Y'},
        {text:'Term Date', dataIndex:'termDate',xtype: 'datecolumn',format:'m/d/Y',hidden:true}

    ],
    dockedItems: [{
        xtype: 'pagingtoolbar',
        dock: 'bottom',
        displayInfo: 'true',
        itemId: 'gridPagingToolbarAllCasesDueToday',
        pageSize: 25,
        hideRefresh:true,
        /*doRefresh: function () {
            this.store.loadPage(1);
        },*/
        listeners: {
            beforechange: 'getSelectedPageData'
        }

    }]
});
