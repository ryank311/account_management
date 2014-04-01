define(['jquery', 'datatables', 'backbone', 'models/account'], function($, dataTables, Backbone, Account) {
  "use strict"
  var AccountUpdateView = Backbone.View.extend({
    el: '#pageContainer',

    events: {
      'click .update': 'update',
      'click #closeButton' : 'cancel'
    },

    showDialog: function() {
      $('#create_account_form')[0].reset();
      $('#dialog_title').text('Update Account');
      $('#overlay').toggleClass('hidden');
      $('#account-create-container').toggleClass('hidden');
    },

    cancel: function() {
      $('#overlay').toggleClass('hidden');
      $('#account-create-container').toggleClass('hidden');
    }

  });

  return AccountUpdateView;
});