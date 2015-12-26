voteNoRestauranteApp.service('VotingService', function (Restangular) {
    this.beginVoting = function() {
      return Restangular.one('votings').get().$object;
    }
})
