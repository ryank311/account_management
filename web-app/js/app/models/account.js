define(['backbone'], function(Backbone) {
	"use strict"
	var Account = Backbone.Model.extend({

		urlRoot: '/account',

        defaults: {
            name: '',
            email: '',
            dateOfBirth: ''
        }
        
    });

    return Account;
});