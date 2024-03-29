Ext.define('Atlas.benefitplan.model.RuleDetail', {
    extend: 'Atlas.benefitplan.model.Base',
	fields: [
		{name: 'CrtriaSetSK', type: 'int'},
		{name: 'CrtriaDtlSK', type: 'int'},
		{name: 'CrtriaOperTypeSK', type: 'int'},
		{name: 'CrtriaCondTypeSK', type: 'int'},
		{name: 'ValQulfrTypeSK', type: 'int'},
		{name: 'CrtriaPrity', type: 'int'},
		{name: 'CrtriaDtlDesc', type: 'string'},
		{name: 'CrtriaVal', type: 'string'},
		{name: 'CurrentUser', type: 'string'}
	],
	proxy: {
		url: '/RuleDetail'
  	}
});
