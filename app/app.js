(function(){
    'use strict';

    angular.module('marvel', ['ui.bootstrap',
                              'marvel.constants',
                              'marvel.core',
                              'marvel.core.characters',
                              'marvel.common',
                              'marvel.common.services',
                              'ngRoute',
                              'toaster'
                              ]);

    angular.module('marvel.constants', []);
    angular.module('marvel.common', []);
    angular.module('marvel.common.services', []);
    angular.module('marvel.core', []);
    angular.module('marvel.core.characters', []);

})();
