voteNoRestauranteApp.service('UserService', function (Restangular) {

    this.createUser = function(user) {
      return Restangular.all('users').post(user);
    }

    this.getUserByEmail = function(email) {
      return Restangular.one('users', email).get();
    }
})
