(function(){
	'use strict';
	// define application routes
	angular.module('marvel').config(['$routeProvider','$locationProvider', function($routeProvider) {
		$routeProvider
			.when('/home', {
				templateUrl: "home.html",
				controller : "HomeController"
			})
			.when('/characters', {
				templateUrl: "core/characters/characters.html",
				controller : "CharacterController"
			})

			.otherwise('/', {
				redirectTo : '/home'
			});
	}]);
})();
