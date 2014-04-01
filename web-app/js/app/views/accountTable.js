define(['jquery', 'datatables', 'backbone', 'collections/accountList'], function($, dataTables, Backbone, AccountList) {
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
        },

        render: function () {

        },

        add: function(account) {
            $('#accountList').dataTable().fnAddData( account.convertToTableData());
        },

        remove: function() {
            alert("Removed account");
        },

        changed: function() {
            alert("Changed account");
        }
        
    });

    return AccountTable;
});