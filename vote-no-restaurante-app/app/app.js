'use strict';

// Declare app level module which depends on views, and components
angular.module('vote-no-restaurante-app', [
  'ngRoute',
  'restangular',
  'flash',
  'vote-no-restaurante-app.voting',
  'vote-no-restaurante-app.ranking'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/voting'});
}]);

var contextApi = "http://localhost:8080/v1/"
