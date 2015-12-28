'use strict';
voteNoRestauranteApp.controller('RankingController',['$scope', 'Flash', 'UserService', 'RankingService', function($scope, Flash, UserService, RankingService) {

  $('#personalRankingForm').hide();

  RankingService.getGeneralRanking().then(function(result) {
    if(result.rankings.length == 0) {
      Flash.create('warning', 'Ainda não existem votos computados.', 'custom-class');
      return
    }
    $scope.generalRanking = result;
  });

  $scope.showRanking = function(user) {
    if(user == null || user.name == null || user.email == null) {
      Flash.create('danger', 'Por favor, preencha os dados corretamente para continuar.', 'custom-class');
      return
    }
    UserService.getUserByEmail(user.email).then(
      function(userResponse) {
        RankingService.getRankingByUser(userResponse.id).then(function(result) {
          $('#rankingSendingVotingForm').hide();
          $('#personalRankingForm').show();
            $scope.personalRanking = result;
        });
      },
      function(error) {
        Flash.create('danger', 'Usuário inexistente, por favor, verifique os dados informados.', 'custom-class');
        return
      });
  }

}]);
