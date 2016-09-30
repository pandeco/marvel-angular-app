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
                                if (!data.name.includes('(') &&
                                    !data.name.includes('LEGO') &&
                                    !data.name.includes('-dok') &&
                                    !data.thumbnail.path.includes('image_not_available')) {
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


        $scope.getComics = function(id) {

            CharacterServices.getComicsById(id)
                .then(function(response) {
                        if (response) {
                            var comicsList = []; debugger
                            angular.forEach(response.data.data.results, function(data, i) {
                                var comic = {
                                    id: data.id,
                                    title: data.name,
                                    issueNumber: data.issueNumber,
                                    img: data.thumbnail != null ? data.thumbnail.path + '.' + data.thumbnail.extension : null
                                };
                                comicsList.push(charac);
                            });
                            $scope.comics = comicsList;
                        }
                    },
                    function(response) {
                        $scope.errorMsg = response.message;
                    });
        }

    }
})();
