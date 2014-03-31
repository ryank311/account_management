define(['backbone', 'models/account'], function(Backbone, Account) {
	"use strict"
	var AccountList = Backbone.Collection.extend({
		url: '/account_management/account/index.json',
        
        model: Account,

        convertModelToTableData: function() {
            var data = [];
            var counter = 0;
            this.each(function(account){
                data[counter] = [account.attributes.name, account.attributes.email, account.attributes.dateOfBirth];
                counter++;
            });
            return data;
        }
    });

    return new AccountList();
});