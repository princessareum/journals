angular.module('app').controller('signupController', function($scope, mainService){

  $scope.createUser = function(user){
    mainService.createUser(user).then(function(response){
      $scope.newUser = response;
    })
  }

}); //end of angular.module
