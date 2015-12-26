'use strict';
angular.module('vote-no-restaurante-app.ranking', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/ranking', {
    templateUrl: 'views/ranking.html',
    controller: 'RankingController'
  });
}])

.controller('RankingController',['$scope', function($scope) {
  $scope.text = "Testando o scope do RankingController";
}]);
