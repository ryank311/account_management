define(['backbone', 'models/account', 'views/accountEditView'], function(Backbone, Account, AccountEditView) {
	"use strict"
	var AccountList = Backbone.Collection.extend({
		url: '/account_management/account/index.json',
        
        model: Account,

        convertModelToTableData: function() {
            var data = [];
            var counter = 0;
            this.each(function(account){
                var view = new AccountEditView({ model: account });
                data[counter] = [account.attributes.name, account.attributes.email, account.attributes.dateOfBirth, view.render().el.outerHTML];
                counter++;
            });
            return data;
        }
    });

    return new AccountList();
});