define(['jquery', 'datatables', 'backbone', 'models/account'], function($, dataTables, Backbone, Account) {
	"use strict"
	var AccountEditViewTable = Backbone.View.extend({
		tagName: 'div',
		className: "editItem",

		events: {
			'click .edit': 'edit',
			'click .delete': 'delete'
		},

		initialize: function() {
	    	this.on('render', this.afterRender);
		},

		render: function() {
			var html = '<div class="editItem' + this.model.attributes.id + '"></div>';
			this.$el.html(html);
		return this;
		},

		afterRender: function() {
			$('.editItem' + this.model.attributes.id).append(this.$el);
			alert("after Render");
		},

		edit: function() {
			alert("Editing");
		},

		delete: function() {
			alert("Deleting");
		}
	});

	return AccountEditViewTable;
});