define(['jquery', 'datatables', 'backbone', 'collections/accountList', 'views/accountEditView'], 
    function($, dataTables, Backbone, AccountList, AccountEditView) {
	"use strict"
    var AccountTable = Backbone.View.extend({
        el: '#accountList',

        initialize: function () {
            this.listenTo(this.model, 'add', this.add);
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'destroy', this.remove);
            this.listenTo(this.model, 'visible', this.toggleVisible);
            this.listenTo(this.model, 'reset', this.reset);
        },

        reset: function() {
            $('#accountList').dataTable({
                "aaData":  this.model.convertModelToTableData(),
                "aoColumns": [
                    { "sTitle": "Name", "sWidth": '25%' },
                    { "sTitle": "Email" },
                    { "sTitle": "Date of Birth" },
                    { "sTitle": "Edit"}
                ]
            });
            var view = new AccountEditView({ model: this.model });
        },

        render: function () {

        },

        add: function(account) {
            $('#accountList').dataTable().fnAddData( account.convertToTableData());
        },

        remove: function(account) {
            var tr = $('.editItem' + account.attributes.id).closest('tr');
            var nRow = tr[0];
            $('#accountList').dataTable().fnDeleteRow(nRow);
        },

        changed: function() {
            alert("Changed account");
        }
        
    });

    return AccountTable;
});