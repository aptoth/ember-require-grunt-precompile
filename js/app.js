define(['routes/router',
		'routes/IndexRoute',
		'controllers/IndexController'],
		function(Router,
			IndexRoute,
			IndexController){
	var App = {
		Router : Router,

		IndexRoute: IndexRoute,

		IndexController: IndexController
	};

	return App;
});