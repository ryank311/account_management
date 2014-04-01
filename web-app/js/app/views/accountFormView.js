define(['jquery', 'datatables', 'backbone', 'models/account'], function($, dataTables, Backbone, Account) {
	
	"use strict"
	
	var AccountFormView = Backbone.View.extend({
		el: '#create_account_form',

		events: {
			'click #create_button': 'create',
			'click #update_button': 'update'
		},

		create: function() {
			$('#form_errors').addClass('hidden');
			var newAccount = new Account();
			var unindexed_array = this.$el.serializeArray();
			$.map(unindexed_array, function(n, i){
				var attribute = n['name'];
				var value = n['value'];
				var map = {};
				map[attribute] = value;
				newAccount.set(map);
			});
			var accountList = this.model;
			newAccount.save(null, {
				success: function(model, response) {
					accountList.add(model);
				    $('#overlay').toggleClass('hidden');
					$('#account-create-container').toggleClass('hidden');
				},
				error: function(model, response) {
					$('#form_errors').removeClass('hidden');
					if(response !== null && response.responseJSON !== null && response.responseJSON.errors !== null) {
						for(var i = 0; i < response.responseJSON.errors.length; i++) {
							$('#form_errors').append('<p class="errorMessage">' + response.responseJSON.errors[i].message + '</p>');
						}
					}
				}
			});
		},

		update: function() {
			$('#form_errors').addClass('hidden');
			var newAccount = new Account();
			var unindexed_array = this.$el.serializeArray();
			$.map(unindexed_array, function(n, i){
				var attribute = n['name'];
				var value = n['value'];
				var map = {};
				map[attribute] = value;
				newAccount.set(map);
			});
			var accountList = this.model;
			newAccount.save(null, {
				success: function(model, response) {
					accountList.add(model);
				    $('#overlay').toggleClass('hidden');
					$('#account-create-container').toggleClass('hidden');
				},
				error: function(model, response) {
					$('#form_errors').removeClass('hidden');
					if(response !== null && response.responseJSON !== null && response.responseJSON.errors !== null) {
						for(var i = 0; i < response.responseJSON.errors.length; i++) {
							$('#form_errors').append('<p class="errorMessage">' + response.responseJSON.errors[i].message + '</p>');
						}
					}
				}
			});
		},

	});

	return AccountFormView;
});