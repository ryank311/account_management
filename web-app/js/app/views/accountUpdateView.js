define(['jquery', 'datatables', 'backbone', 'models/account'], function($, dataTables, Backbone, Account) {
  "use strict"
  var AccountUpdateView = Backbone.View.extend({
    el: '#pageContainer',

    events: {
      'click .update': 'showDialog',
      'click #closeButton' : 'cancel'
    },

    showDialog: function() {
      $('#create_account_form')[0].reset();
      $('#dialog_title').text('Update Account');
      $('#overlay').removeClass('hidden');
      $('#update_button').removeClass('hidden');
      $('#create_button').addClass('hidden');
      //Pre-Pop fields.
      $('#account-create-container').removeClass('hidden');
    },

    cancel: function() {
      $('#overlay').addClass('hidden');
      $('#account-create-container').addClass('hidden');
    }

  });

  return AccountUpdateView;
});