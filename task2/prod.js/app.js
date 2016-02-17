'use strict';

;(function () {
    'use strict';

    angular.module('lobby', ['ngRoute']).config(function ($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
            templateUrl: 'home.html',
            controller: mainController
        }).when('/new', {
            templateUrl: 'new.html',
            controller: mainController
        }).when('/scratchcards', {
            templateUrl: 'scratchcards.html',
            controller: mainController
        }).when('/jackpot', {
            templateUrl: 'jackpot.html',
            controller: mainController
        }).otherwise({
            redirectTo: '/'
        });

        $locationProvider.html5Mode(true);
    }).controller('SampleController', ['$scope', SampleController]);

    function SampleController($scope) {
        console.log('SampleController');
        // Please follow this pattern when creating controllers
        // Feel free to replace this controller with something applicable.
    }
})();