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
      $('#overlay').toggleClass('hidden');
      $('#account-create-container').toggleClass('hidden');
    },

    cancel: function() {
      $('#overlay').toggleClass('hidden');
      $('#account-create-container').toggleClass('hidden');
    }

  });

  return AccountCreateView;
});