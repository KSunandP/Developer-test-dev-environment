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
        .factory('Categories', ['$http', Categories])
        .factory('Games', ['$http', Games])
        .controller('NavController', ['$scope', '$location', NavController])
        .controller('MainController', ['$scope', '$http', 'Categories', 'Games', MainController]);

    function Categories($http) {
        // returns data from feed when getCat called
        return {
            getCat() {
                let promise = $http({method: 'GET', url: './category-feed.json'})
                    .success((data) => {
                        return data;
                    })
                    .error(() => {
                        console.log('Failed to get categories');
                    });
                return promise;
            }
        };
    }

    function Games($http) {
        // returns data from feed when getGames called
        return {
            getGames() {
                let promise = $http({method: 'GET', url: './game-feed.json'})
                    .success((data) => {
                        return data;
                    })
                    .error(() => {
                        console.log('Failed to get games');
                    });
                return promise;
            }
        };
    }

    function NavController($scope, $location) {
        // Add or remove class 'active' dependant on path via ng-class
        $scope.active = (viewPath) => {return viewPath === $location.path()}
    }

    function MainController($scope, $http, Categories, Games) {
        // New arrays to hold combined data from feeds sorted by game category
        $scope.new = [];
        $scope.scratchcards = [];
        $scope.jackpots = [];

        // Get data from category feed and combine with game data through corresponding gameId
        Categories.getCat().then(function(promise) {
            angular.forEach(promise.data[0].data.new, (entry) => {
                Games.getGames().then((promise) => {
                    $scope.new.push(angular.extend(entry, promise.data[0].data[entry.gameId]));
                });
            });
            angular.forEach(promise.data[0].data.scratchcards, (entry) => {
                Games.getGames().then((promise) => {
                    $scope.scratchcards.push(angular.extend(entry, promise.data[0].data[entry.gameId]));
                });
            });
            angular.forEach(promise.data[0].data.jackpot, (entry) => {
                Games.getGames().then((promise) => {
                    $scope.jackpots.push(angular.extend(entry, promise.data[0].data[entry.gameId]));
                });
            });
        });

        // Set variables for limitTo filter to be altered by increments of 5 by click on a cta calling showmore function
        $scope.nwlimit = 5;
        $scope.sclimit = 5;
        $scope.jplimit = 5;
        $scope.showmore = (type) => {
            switch (type) {
                case 'nw':
                    $scope.nwlimit += 5;
                    break;
                case 'sc':
                    $scope.sclimit += 5;
                    break;
                case 'jp':
                    $scope.jplimit += 5;
                    break;
            }

        }

    }

})();