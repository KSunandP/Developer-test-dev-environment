;(function() {
    'use strict';

    angular.module('lobby', ['ngRoute'])
        .config(function($routeProvider, $locationProvider) {
            // configure your $routeProvider and $locationProvider settings here
        })
        .controller('SampleController', ['$scope', SampleController]);

    function SampleController($scope) {
        console.log('SampleController');
        // Please follow this pattern when creating controllers
        // Feel free to replace this controller with something applicable.
    }

})();