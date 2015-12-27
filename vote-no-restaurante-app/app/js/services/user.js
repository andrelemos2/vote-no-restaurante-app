voteNoRestauranteApp.service('UserService', function (Restangular) {

    this.createUser = function(user) {
      return Restangular.all('users').post(user);
    }
})
