define(['jquery', 'backbone', 'views/accountTable', 'collections/accountList', 'views/accountCreateView', 'views/accountFormView'], 
        function($, Backbone, AccountTable, AccountList, AccountCreationDialog, AccountFormView) {
	"use strict"
    var AccountManagerView = Backbone.View.extend({
        el: '#accountManager',
        
        events: {},

        initialize: function () {
            //this.listenTo(AccountList, 'add', this.add);
            //this.listenTo(AccountList, 'reset', this.reset);
            //this.listenTo(AccountList, 'remove', this.remove);
            this.listenTo(AccountList, 'change:completed', this.changed);
            this.listenTo(AccountList, 'all', this.render);
            var accountTable = new AccountTable({model: AccountList});
            var accountCreation =  new AccountCreationDialog({model: AccountList});
            var accountForm =  new AccountFormView({model: AccountList});
            AccountList.fetch({reset:true});
        },

        render: function () {

        },

        add: function() {
            alert("Added account");
        },

        remove: function() {
            alert("Removed account");
        },

        changed: function() {
            alert("Changed account");
        }
    });

    return AccountManagerView;
});