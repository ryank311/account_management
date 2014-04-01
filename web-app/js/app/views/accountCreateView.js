define(['jquery', 'datatables', 'backbone', 'models/account'], function($, dataTables, Backbone, Account) {
  "use strict"
  var AccountCreateView = Backbone.View.extend({
    el: '#pageContainer',

    events: {
      'click .create': 'showDialog',
      'click #closeButton' : 'cancel'
    },

    showDialog: function() {
      $('#create_account_form')[0].reset();
      $('#dialog_title').text('Create Account');
      $('#overlay').removeClass('hidden');
      $('#create_button').removeClass('hidden');
      $('#update_button').addClass('hidden');
      $('#account-create-container').removeClass('hidden');
    },

    cancel: function() {
      $('#overlay').addClass('hidden');
      $('#account-create-container').addClass('hidden');
    }

  });

  return AccountCreateView;
});