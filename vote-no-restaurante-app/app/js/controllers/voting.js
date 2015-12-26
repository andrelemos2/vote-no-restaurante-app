'use strict';
voteNoRestauranteApp.controller('VotingController',['$scope','VotingService', function($scope, VotingService) {
    $scope.text = VotingService.beginVoting();
}]);
