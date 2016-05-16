angular.module('app').controller('signupController', function($scope, mainService, $state){

  $scope.createUser = function(user){
    mainService.createUser(user).then(function(response){
      $scope.newUser = response;
      alert('You are successfully signed up! Please login to continue.');
      $state.go('home');
    })
  }

}); //end of angular.module
