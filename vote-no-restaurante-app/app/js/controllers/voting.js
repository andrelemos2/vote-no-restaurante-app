'use strict';
voteNoRestauranteApp.controller('VotingController',['$scope','Flash', 'VotingService', 'UserService', 'RankingService', function($scope, Flash, VotingService, UserService, RankingService) {
    $scope.votes = [];
    $('#sendingVotingForm').hide();
    $('#rankingForm').hide();
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
      if(user == null || user.name == null || user.email == null) {
        Flash.create('danger', 'Por favor, preencha os dados corretamente para continuar.', 'custom-class');
        return
      }
      $('#sendingVotingForm').hide();
      $('#rankingForm').show();
      var userRequest = '{ "user":' +
        '{ "email": "'+user.email+'", "name": "'+user.name+'" },' +
        '"votes":' + JSON.stringify($scope.votes) +
      '}';
      UserService.createUser(userRequest).then(function(userResponse) {
          Flash.create('success', 'Obrigado por votar! :)', 'custom-class');
          RankingService.getRankingByUser(userResponse.id).then(function(result) {
              console.log(JSON.stringify(result));
              $scope.personalRanking = result;
          });
          RankingService.getGeneralRanking().then(function(result) {
              console.log(JSON.stringify(result));
              $scope.generalRanking = result;
          });
      });
    }

}]);
