define(['backbone', 'models/account'], function(Backbone, Account) {
	"use strict"
	var AccountList = Backbone.Collection.extend({

        model: Account,

        convertModelToTableData: function() {
            var data = [];
            var counter = 0;
            this.each(function(account){
                data[counter] = [account.name, account.email, account.dateOfBirth] ;
            })
            return data;
        }
    });

    return new AccountList();
});