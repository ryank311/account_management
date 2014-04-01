define(['backbone'], function(Backbone) {
	"use strict"
	var Account = Backbone.Model.extend({

        methodToURL: {
            'read': '/account_management/account/',
            'create': '/account_management/account/save.json',
            'update': '/account_management/account/update',
            'delete': '/account_management/account/delete/'
        },

		sync: function(method, model, options) {
            options = options || {};
            options.url = model.methodToURL[method.toLowerCase()];
            if(method.toLowerCase() === 'delete') {
                options.url = options.url + model.attributes.id + '.json';
            }
            return Backbone.sync.apply(this, arguments);
        },

        defaults: {
            name: '',
            email: '',
            dateOfBirth: ''
        },

        convertToTableData: function() {
            
            var data = [];
            if(this.attributes.dateOfBirth === "date.struct") {
                data = [this.attributes.name, this.attributes.email, 
                    this.attributes.dateOfBirth_year + '-' + this.attributes.dateOfBirth_month  + '-' + this.attributes.dateOfBirth_day, 
                    '<div class="editItem' + this.attributes.id + '"><button type="button" class="edit" id="edit' + this.attributes.id + '">Edit</button><button type="button" class="delete" id="delete' + this.attributes.id + '">Delete</button></div>'];
            } else {
                data = [this.attributes.name, this.attributes.email, 
                    this.attributes.dateOfBirth.substring(0,10), 
                    '<div class="editItem' + this.attributes.id + '"><button type="button" class="edit" id="edit' + this.attributes.id + '">Edit</button><button type="button" class="delete" id="delete' + this.attributes.id + '">Delete</button></div>'];
            }
            return data;
        }
        
    });

    return Account;
});