(function(){
	'use strict';
	// define application routes
	angular.module('marvel').config(['$routeProvider','$locationProvider', function($routeProvider) {
		$routeProvider
			.when('/home', {
				templateUrl: "home.html",
				controller : "HomeController"
			})
			.when('/heroes', {
				templateUrl: "core/heroes/heroes.html",
				controller : "HeroesController"
			})

			.otherwise('/', {
				redirectTo : '/home'
			});
	}]);
})();
