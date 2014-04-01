define(['backbone', 'views/accountEditView'], function(Backbone, AccountEditView) {
	"use strict"
	var Account = Backbone.Model.extend({

		url : function() {
            if (this.isNew()) {
                return "/account_management/account/save.json";
            } else {
                return "/account_management/account/" + this.id + ".json";
            }
        },

        defaults: {
            name: '',
            email: '',
            dateOfBirth: ''
        },

        convertToTableData: function() {
            var view = new AccountEditView({ model: this });
            var data = [];
            if(this.attributes.dateOfBirth === "date.struct") {
                data = [this.attributes.name, this.attributes.email, 
                    this.attributes.dateOfBirth_year + '-' + this.attributes.dateOfBirth_month  + '-' + this.attributes.dateOfBirth_day, 
                    view.render().el.outerHTML];
            } else {
                var dateString = this.attributes.dateOfBirth.substring(0,10);
                data = [this.attributes.name, this.attributes.email, dateString, view.render().el.outerHTML];
            }
            return data;
        }
        
    });

    return Account;
});