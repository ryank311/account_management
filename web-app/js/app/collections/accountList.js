define(['backbone', 'models/account'], function(Backbone, Account) {
	"use strict"
	var AccountList = Backbone.Collection.extend({
		url: '/account_management/account/index.json?offset=0&max=500',
        
        model: Account,

        convertModelToTableData: function() {
            var data = [];
            var counter = 0;
            this.each(function(account){
                data[counter] = account.convertToTableData();
                counter++;
            });
            return data;
        }
    });

    return new AccountList();
});