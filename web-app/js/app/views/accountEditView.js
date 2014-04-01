define(['jquery', 'datatables', 'backbone', 'models/account', 'views/accountUpdateView'], 
	function($, dataTables, Backbone, Account, AccountUpdateView) {
	"use strict"
	var AccountEditViewTable = Backbone.View.extend({
		
		el: '#accountList',

		events: {
			'click .edit': 'edit',
			'click .delete': 'delete'
		},
		
		edit: function(event) {
			var editId = event.target.id;
			var id = editId.substring(4);
			var editModel = this.model.get(id);
			var accountUpdateView = new AccountUpdateView({model: editModel});
			accountUpdateView.showDialog(editModel);
		},

		delete: function(event) {
			var deleteId = event.target.id;
			var id = deleteId.substring(6);
			var model = this.model.get(id);
			model.destroy();
		}
	});

	return AccountEditViewTable;
});