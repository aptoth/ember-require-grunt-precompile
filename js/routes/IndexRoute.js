define(['ember'],function(ember, indexTemplate){
	var IndexRoute = Ember.Route.extend({
		model: function(){
			return ['red','blue','yellow','green'];
		}
	});

	return IndexRoute;
});