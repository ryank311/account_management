define(['jquery', 'backbone', 'views/accountTable', 'collections/accountList', 'views/accountCreateView', 'views/accountFormView'], 
        function($, Backbone, AccountTable, AccountList, AccountCreationDialog, AccountFormView) {
	"use strict"
    var AccountManagerView = Backbone.View.extend({
        el: '#accountManager',
        
        events: {},

        initialize: function () {
            var accountTable = new AccountTable({model: AccountList});
            var accountCreation =  new AccountCreationDialog({model: AccountList});
            var accountForm =  new AccountFormView({model: AccountList});
            AccountList.fetch({reset:true});
        }
    });

    return AccountManagerView;
});