'use strict';
voteNoRestauranteApp.controller('VotingController',['$scope','VotingService', function($scope, VotingService) {
    $scope.votes = [];
    $scope.userRequest = {};

    // userRequest = { "user": {
    //     "email": "vinicius.x@icloud.com",
    //     "name": "Vinícius"
    //   }
    // }

    VotingService.beginVoting().then(function(result) {
    			$scope.voting = result;
		});

    $scope.vote = function(restaurant) {
      $scope.computingVote(restaurant)
      VotingService.vote(restaurant.id).then(function(result) {
            $scope.voting = result;
      });
    }

    $scope.computingVote = function(restaurant) {
      var jsonObject = '{ "restaurant":' +
          '{ "id": '+restaurant.id+', "name": "'+restaurant.name+'", "logo": "'+restaurant.logo+'" },' +
          '"user":' +
          '{ "email": "null", "name": "null"}' +
        '}';

      var text = '{ "employees" : [' +
          '{ "firstName":"John" , "lastName":"Doe" },' +
          '{ "firstName":"Anna" , "lastName":"Smith" },' +
          '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

      var vote = JSON.parse(jsonObject);
      $scope.votes.push(vote);
    }

}]);
