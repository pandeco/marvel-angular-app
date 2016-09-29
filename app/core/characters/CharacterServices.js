(function() {
    'use strict';

    angular.module('marvel.core.characters').service('CharacterServices', CharacterServices);

    CharacterServices.$inject = ['RESTServiceManager', '$filter'];

    function CharacterServices(RESTServiceManager, $filter) {

        this.getCharacterByName = function(name) {
            return RESTServiceManager.performRequest('characters?nameStartsWith=' + name);
        };
    }
})();
