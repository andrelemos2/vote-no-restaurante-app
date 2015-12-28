'use strict';
var voteNoRestauranteApp = angular.module('vote-no-restaurante-app', [
  'ngRoute',
  'restangular',
  'flash'
]);

voteNoRestauranteApp.run(['$rootScope', 'Restangular', function ($rootScope, Restangular) {
  Restangular.setBaseUrl(contextApi);
  Restangular.setDefaultHeaders({'Content-Type': 'application/json'});
}]);

voteNoRestauranteApp.config(function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/voting'});

  $routeProvider.when('/voting', {
    templateUrl: 'views/voting.html',
    controller: 'VotingController'
  }),
  $routeProvider.when('/ranking', {
    templateUrl: 'views/ranking.html',
    controller: 'RankingController'
  });
});

var contextApi = "http://vote-no-restaurante-apis.herokuapp.com/v1/"
