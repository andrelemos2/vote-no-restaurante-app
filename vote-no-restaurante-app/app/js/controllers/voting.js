'use strict';
voteNoRestauranteApp.controller('VotingController',['$scope','VotingService', function($scope, VotingService) {
    $scope.votes = [];
    $('#sendingVotingForm').hide();
    // $('#votingForm').hide();

    VotingService.beginVoting().then(function(result) {
    			$scope.voting = result;
		});

    $scope.vote = function(restaurant) {
      $scope.computingVote(restaurant)
      VotingService.vote(restaurant.id).then(function(result) {
          if(result.first == null) {
            $('#votingForm').hide();
            $('#sendingVotingForm').show();
          }
          else {
              $scope.voting = result;
          }
      });
    }

    $scope.computingVote = function(restaurant) {
      var jsonObject = '{ "restaurant":' +
          '{ "id": '+restaurant.id+', "name": "'+restaurant.name+'", "logo": "'+restaurant.logo+'" },' +
          '"user":' +
          '{ "email": "null", "name": "null"}' +
        '}';

      var vote = JSON.parse(jsonObject);
      $scope.votes.push(vote);
    }

    $scope.showRanking = function(user) {
      var userRequest = '{ "user":' +
        '{ "email": "'+user.email+'", "name": "'+user.name+'" },' +
        JSON.stringify($scope.votes)
      '}';
      console.log(userRequest);
    }

}]);
