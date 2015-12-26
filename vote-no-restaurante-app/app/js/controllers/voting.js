'use strict';
angular.module('vote-no-restaurante-app.voting', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/voting', {
    templateUrl: 'views/voting.html',
    controller: 'VotingController'
  });
}])
.service('VotingService', function (Restangular) {
    Restangular.setBaseUrl(contextApi);
    Restangular.setDefaultHeaders({'Content-Type': 'application/json'});

    this.beginVoting = function() {
      return Restangular.one('votings').get().$object;;
    }
})
.controller('VotingController',['$scope', 'VotingService', function($scope, VotingService) {
    $scope.text = VotingService.beginVoting();
}]);
