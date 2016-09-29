(function() {
    'use strict';

    angular.module('marvel.common.services').service('RESTServiceManager', function(API_URL, API_KEY, $http) {

        this.buildHttpConfig = function(api) {

            var timestamp = new Date().getTime();
            var privateKey = '9fe5d5ebc2b703bed35245a5aca1f6d6d73307ff';
            var hash = this.getHash(timestamp, privateKey);
            var result = API_URL + api + '&ts=' + timestamp + '&apikey=' + API_KEY + '&hash=' + hash;
            return result;
        };

        this.getHash = function(timestamp, privateKey) {
          return CryptoJS.MD5(timestamp + privateKey + API_KEY).toString();
        };

        this.performRequest = function(api) {
            return $http.get(this.buildHttpConfig(api));
        };
    });
})();
