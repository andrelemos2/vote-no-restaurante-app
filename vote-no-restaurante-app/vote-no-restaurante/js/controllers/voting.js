'use strict';
voteNoRestauranteApp.controller('VotingController',['$scope','Flash', 'VotingService', 'UserService', 'RankingService', function($scope, Flash, VotingService, UserService, RankingService) {
    $scope.votes = [];
    $('#sendingVotingForm').hide();
    $('#rankingForm').hide();
    var progress = 0;

    VotingService.beginVoting().then(function(result) {
    			$scope.voting = result;
		});

    $scope.vote = function(restaurant) {
      $scope.computingVote(restaurant)
      VotingService.vote(restaurant.id).then(function(result) {
          progress += (100 * 0,25);
          $('#progress-bar').width(progress + '%');
          $('#progress-bar').html(progress + '%');
          if(result.first == null) {
            setTimeout(function(){
              $('#votingForm').hide();
              $('#sendingVotingForm').show();
            }, 1000);
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
              $scope.personalRanking = result;
          });
          RankingService.getGeneralRanking().then(function(result) {
              $scope.generalRanking = result;
          });
      });
    }

}]);
