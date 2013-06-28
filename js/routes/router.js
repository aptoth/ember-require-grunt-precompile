define(['ember'],function(){
	var Router = Ember.Router.extend();

	Router.map(function(){
		this.route('index', {path: '/'});
		this.route('two',{path: '/two'});
	});
	
	return Router;
});