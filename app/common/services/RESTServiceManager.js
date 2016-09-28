(function() {
    'use strict';

    angular.module('marvel.common.services').service('RESTServiceManager', function(API_URL, API_KEY, $http) {


        this.buildHttpConfig = function(api) {

            var config = {
                method: method,
                url: API_URL + '/' + api + '?apikey=' + API_KEY,
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            return config;
        };

        this.performRequest = function(api) {
            return $http(this.buildHttpConfig(api));
        };
    });
})();
