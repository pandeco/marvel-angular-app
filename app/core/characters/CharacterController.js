(function() {
    'use strict';

    angular.module('marvel.core.characters').controller('CharacterController', CharacterController);

    CharacterController.$inject = ['$scope', '$location', '$filter', 'toaster', 'CharacterServices'];

    function CharacterController($scope, $location, $filter, toaster, CharacterServices) {

        $scope.processForm = function() {

            CharacterServices.getCharacterByName($scope.formData.name)
                .then(function(response) {
                        if (response) {
                            var charactersList = [];
                            angular.forEach(response.data.data.results, function(data, i) {
                                if (!data.name.includes('(')
                                  && !data.name.includes('LEGO')
                                    && !data.name.includes('-dok')) {
                                  var charac = {
                                    id: data.id,
                                    name: data.name,
                                    desc: data.description,
                                    img: data.thumbnail != null ? data.thumbnail.path + '.' + data.thumbnail.extension : null
                                  };
                                  charactersList.push(charac);
                                }
                            });
                            $scope.characters = charactersList;
                        }
                    },
                    function(response) {
                        $scope.errorMsg = response.message;
                    });
        }

    }
})();
