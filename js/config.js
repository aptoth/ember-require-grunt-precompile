define({
    AppName: "verily",
    shim: {
        'ember': {
            deps: ['handlebars', 'jquery'],
            exports: 'Ember'
        },
        'handlebars':{
        	exports: 'Handlebars'
        }
    },
    paths: {
        jquery: 'libs/jquery.min',
        handlebars: 'libs/handlebars',
        ember: 'libs/ember',
        App: 'app'
    }
});