define(['jquery', 'datatables', 'backbone', 'models/account'], function($, dataTables, Backbone, Account) {
  "use strict"
  var AccountUpdateView = Backbone.View.extend({
    el: '#pageContainer',

    events: {
      'click .update': 'showDialog',
      'click #closeButton' : 'cancel'
    },

    showDialog: function(model) {
      $('#create_account_form')[0].reset();
      $('#dialog_title').text('Update Account');
      $('#overlay').removeClass('hidden');
      $('#update_button').removeClass('hidden');
      $('#create_button').addClass('hidden');
      //Pre-Pop fields.
      $('#email').val(model.attributes.email );
      $('#name').val(model.attributes.name );
      $('#dateOfBirth_year').val(model.attributes.dateOfBirth.substring(0,4));
      $('#dateOfBirth_month').val(model.attributes.dateOfBirth.substring(5,7));
      $('#dateOfBirth_day').val(model.attributes.dateOfBirth.substring(8,10));
      $('#accountId').val(model.attributes.id);
      $('#account-create-container').removeClass('hidden');
    },

    cancel: function() {
      $('#overlay').addClass('hidden');
      $('#account-create-container').addClass('hidden');
    }

  });

  return AccountUpdateView;
});