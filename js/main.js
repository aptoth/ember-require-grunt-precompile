(function(root) {
	require(["config"], function(config) {
		requirejs.config(config);

		requirejs(["js/templates/precompiled/templatesModule.js"]);

		requirejs(["App", "ember"], function(App, Ember,HBS) {

			var AppName = config.AppName || "App";
			root[AppName] = App = Ember.Application.create(App);
			
		});
	});
})(this);

