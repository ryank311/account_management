requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: '/account_management/static/js/lib',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app: '../app'
    },

    map: {
    	'*' : {
    		'jquery' : 'jquery-2.1.0.min'
            'datatables' : 'jquery.dataTables.min'
    	}
    }
});

require(["jquery"], function($) {
    
});