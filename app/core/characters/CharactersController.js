(function(){
  'use strict';

  angular.module('marvel.core.characters').controller('CharactersController', CharactersController);

    CharactersController.$inject = ['$scope', '$modal', '$location', '$filter',  'toaster', '= function(entity, object){'];

    function CharactersController($scope, $modal, $location, $filter,  toaster, CharacterServices) {

      $scope.searchCharacterByName = = function(name){
        $scope.promise = CharacterServices.getCharacterByName(name);
      }

    }
})();
