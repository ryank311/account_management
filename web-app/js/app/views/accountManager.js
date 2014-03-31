define(['jquery', 'backbone', 'views/accountTable', 'collections/accountList'], 
        function($, Backbone, AccountTable, AccountList) {
	"use strict"
    var AccountManagerView = Backbone.View.extend({
        el: '#accountManager',
        
        events: {},

        initialize: function () {
            this.listenTo(AccountList, 'add', this.add);
            this.listenTo(AccountList, 'remove', this.remove);
            this.listenTo(AccountList, 'change:completed', this.changed);
            this.listenTo(AccountList, 'all', this.render);
            AccountList.fetch({reset:true});
            var accountTable = new AccountTable({model: AccountList});
            accountTable.render(AccountList);
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