/*global define*/
define([
	'jquery',
	'backbone',
	'collections/accountList'
], function ($, Backbone, Accounts) {
	'use strict';

	var AccountRouter = Backbone.Router.extend({
		routes: {
			"edit/:accountId": "edit",
			"create": "create",
			"delete/:accountId": "delete"
		},

		edit: function(accountId) {

		},

		create: function() {

		},

		delete: function(accountId) {
			
		}
	});

	return AccountRouter;
});
