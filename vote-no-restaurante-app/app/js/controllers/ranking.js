'use strict';
voteNoRestauranteApp.controller('RankingController',['$scope', 'Flash', 'UserService', 'RankingService', function($scope, Flash, UserService, RankingService) {

  $('#personalRankingForm').hide();

  RankingService.getGeneralRanking().then(function(result) {
      $scope.generalRanking = result;
  });

  $scope.showRanking = function(user) {
    if(user == null || user.name == null || user.email == null) {
      Flash.create('danger', 'Por favor, preencha os dados corretamente para continuar.', 'custom-class');
      return
    }
    if(user == null) return
    $('#rankingSendingVotingForm').hide();
    $('#personalRankingForm').show();
    var userRequest = '{ "user":' +
      '{ "email": "'+user.email+'", "name": "'+user.name+'" },' +
      '"votes":' + JSON.stringify($scope.votes) +
    '}';
    UserService.createUser(userRequest).then(function(userResponse) {
        RankingService.getRankingByUser(userResponse.id).then(function(result) {
            $scope.personalRanking = result;
        });
    });
  }

}]);
