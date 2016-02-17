;(function() {
    'use strict';

    angular.module('lobby', ['ngRoute'])
        .config(function($routeProvider, $locationProvider) {
            $routeProvider
                .when('/', {
                    templateUrl : 'views/home.html',
                    controller : NavController
                })
                .when('/new', {
                    templateUrl : 'views/new.html',
                    controller : NavController
                })
                .when('/scratchcards', {
                    templateUrl : 'views/scratchcards.html',
                    controller : NavController
                })
                .when('/jackpot', {
                    templateUrl : 'views/jackpot.html',
                    controller : NavController
                })
                .otherwise({
                    redirectTo: '/'
                });

            $locationProvider.html5Mode(true);
        })
        .factory('Games', ['$http', Games])
        .controller('NavController', ['$scope', '$location', NavController])
        .controller('MainController', ['$scope', '$http', 'Games', MainController]);

    function Games($http) {
        return {
            getData: function () {
                let promise = $http({method: 'GET', url: './category-feed.json'})
                    .success(function (data) {
                        return data;
                    })
                    .error(function () {
                        return {"status": false};
                    });
                return promise;
            }
        };
    }

    function NavController($scope, $location) {
        // Add or remove class 'active' dependant on path via ng-class
        $scope.active = (viewPath) => {return viewPath === $location.path()}
    }

    function MainController($scope, $http, Games) {
        // Set up new arrays for game info by category
        $scope.new = [];
        $scope.scratchcards = [];
        $scope.jackpots = [];

        // Get data from category feed and combine with game data through corresponding gameId
        Games.getData().then(function(promise) {
            angular.forEach(promise.data[0].data.new, function(entry){
                $http.get('./game-feed.json')
                    .success(function(data) {
                        $scope.new.push(angular.extend(entry, data[0].data[entry.gameId]));
                    });
            });
            angular.forEach(promise.data[0].data.scratchcards, function(entry){
                $http.get('./game-feed.json')
                    .success(function(data) {
                        $scope.scratchcards.push(angular.extend(entry, data[0].data[entry.gameId]));
                    });
            });
            angular.forEach(promise.data[0].data.jackpot, function(entry){
                $http.get('./game-feed.json')
                    .success(function(data) {
                        $scope.jackpots.push(angular.extend(entry, data[0].data[entry.gameId]));
                    });
            });
        });

        $scope.nwlimit = 5;
        $scope.sclimit = 5;
        $scope.jplimit = 5;
        $scope.showmore = (type) => {
            switch (type) {
                case 'nw':
                    $scope.nwlimit = 10;
                    break;
                case 'sc':
                    $scope.sclimit = 10;
                    break;
                case 'jp':
                    $scope.jplimit = 10;
                    break;
            }

        }

    }

})();