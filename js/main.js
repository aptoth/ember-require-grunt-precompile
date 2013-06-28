(function(root) {
    require(["config"], function(config) {

        requirejs.config(config);

        requirejs(["js/templates/precompiled/templatesModule.js"]);
        
        require(["App", "ember"], function(App, Ember) {

            var AppName = config.app_name || "App";
            root[AppName] = App = Ember.Application.create(App);
        });
    });
})(this);
