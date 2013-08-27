define(['routes/router',
		'routes/IndexRoute',
		'controllers/IndexController',
		'views/RichView'],
		function(Router,
			IndexRoute,
			IndexController,
			RichView){
	var App = {
		LOG_TRANSITIONS: true,
		Router : Router,

		IndexRoute: IndexRoute,

		IndexController: IndexController,

		RichView: RichView
	};

	return App;
});