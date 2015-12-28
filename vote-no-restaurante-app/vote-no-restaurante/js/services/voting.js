voteNoRestauranteApp.service('VotingService', function (Restangular) {
  
    this.beginVoting = function() {
      return Restangular.one('votings').get();
    }

    this.vote = function(restaurantId) {
      return Restangular.one('votings', restaurantId).get();
    }
})
