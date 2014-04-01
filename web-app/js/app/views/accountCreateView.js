define(['jquery', 'datatables', 'backbone', 'models/account'], function($, dataTables, Backbone, Account) {
  "use strict"
  var AccountCreateView = Backbone.View.extend({
    el: '#pageContainer',

    events: {
      'click .create': 'showDialog'
    },

    showDialog: function() {
      $('#overlay').toggleClass('hidden');
      $('#account-create-container').toggleClass('hidden');
    }

  });

  return AccountCreateView;
});