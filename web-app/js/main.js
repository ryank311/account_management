requirejs.config({
    //By default load any module IDs from js/app
    baseUrl: '/account_management/static/js/app',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        jquery: '../lib/jquery-2.1.0.min',
        underscore: '../lib/underscore-min',
        backbone: '../lib/backbone-min',
        datatables: '../lib/jquery.dataTables.min',
    },

    shim: {
        'underscore-min': {
            exports: '_'
        },
        'backbone-min': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'jquery.dataTables.min': {
            deps: ['jquery']
        }
    }
});

require(['jquery', 'backbone', 'views/accountManager', 'routers/router'], 
    function($, BackBone, AccountManager, Workspace) {
    // Initialize routing and start Backbone.history()
    new Workspace();
    Backbone.history.start();
    
    new AccountManager();
});