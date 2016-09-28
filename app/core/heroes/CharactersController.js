(function(){
  'use strict';

  angular.module('marvel.core.heroes').controller('HeroesController', HeroesController);

    HeroesController.$inject = ['$scope', '$modal', '$location', '$filter',  'toaster'];

    function HeroesController($scope, $modal, $location, $filter,  toaster) {


    }
})();
