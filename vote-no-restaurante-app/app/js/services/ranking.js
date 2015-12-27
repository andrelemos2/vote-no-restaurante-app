voteNoRestauranteApp.service('RankingService', function (Restangular) {

    this.getGeneralRanking = function() {
      return Restangular.one('rankings').get();
    }

    this.getRankingByUser = function(userId) {
      return Restangular.one('rankings', userId).get();
    }
})
