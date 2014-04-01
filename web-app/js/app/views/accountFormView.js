define(['jquery', 'datatables', 'backbone', 'models/account'], function($, dataTables, Backbone, Account) {
	
	"use strict"
	
	var AccountFormView = Backbone.View.extend({
		el: '#create_account_form',

		events: {
			'click .create': 'confirm'
		},

		getFormData: function(model) { 
		    var self = this;
		},

		confirm: function() {
			var newAccount = new Account();
			var unindexed_array = form.serializeArray();
			$.map(unindexed_array, function(n, i){
				newAccount.set({n['name']] : n['value']});
			});
			newAccount.save();
			this.model.add(newAccount);
		}

	});

	return AccountFormView;
});