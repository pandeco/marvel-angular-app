(function () {
    'use strict';

    angular.module('marvel.core.characters').service('CharacterServices', CharacterServices);

    CharacterServices.$inject = ['RESTServiceManager', '$filter', '$q'];

    function CharacterServices(RESTServiceManager, $filter, $q) {

        this.getCharacterByName = function (name) {
            var scope = this;
            var deferred = $q.defer();
            var successCallback = function(response){

                scope.convertCustomAttributesFromJsonToArray(response.data);

                deferred.resolve(response);
            };

            var errorCallback = function(response){
                deferred.reject(response);
            };

            RESTServiceManager.performRequest('characters?nameStartsWith=' + name).then(successCallback, errorCallback);

            return deferred.promise;
        };


        this.convertCustomAttributesFromJsonToArray = function(responseJson){
          var result = [];
            for (var chacacter in responseJson.data.results) {
                if (chacacter.name.indexOf('(') == -1 && chacacter.name.indexOf('LEGO')  == -1) {
                    var person = {
                      name: chacacter.name,
                      thumb: chacacter.thumbnail.path
                    }
                    result.push(person);
                }
            }
            return result;
        };
    }
})();
