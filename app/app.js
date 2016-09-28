(function(){
    'use strict';

    angular.module('marvel', ['marvel.constants', 'marvel.core', 'marvel.common', 'ngRoute', 'toaster', 'ui.bootstrap']);

    angular.module('marvel.constants', []);
    angular.module('marvel.common', []);
    angular.module('marvel.core', []);
    angular.module('marvel.core.characters', []);

})();
