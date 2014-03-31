define(['backbone', 'models/account'], function(Backbone, Account) {
	"use strict"
	var AccountList = Backbone.Collection.extend({
		url: '/account_management/account/index.json',
        model: Account
    });

    return new AccountList();
});