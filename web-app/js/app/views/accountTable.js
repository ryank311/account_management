define(['jquery', 'datatables', 'backbone', 'collections/accountList'], function($, dataTables, Backbone, AccountList) {
	"use strict"
    var AccountTable = Backbone.View.extend({
        el: '#accountList',
        
        events: {},

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'destroy', this.remove);
            this.listenTo(this.model, 'visible', this.toggleVisible);
            this.listenTo(this.model, 'reset', this.reset);
        },

        reset: function() {
            $('#accountList').dataTable({
                "aaData":  this.model.convertModelToTableData(),
                "aoColumns": [
                    { "sTitle": "Name" },
                    { "sTitle": "Email" },
                    { "sTitle": "Date of Birth" }
                ]
            });
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

    return AccountTable;
});