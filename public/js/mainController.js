angular.module('app').controller('mainController', function($scope, mainService, $state){

  // $scope.images = [];
  // $scope.journalList = [];
  //
  // $scope.getUser = function(){
  //       mainService.getUser($scope.user._id).then(function(response){
  //           $scope.user = response;
  //       })
  //   };
  //
  //
  // $scope.login = function(user){
  //   mainService.login(user).then(function(response){
  //     if(response.login){ mainService.getUser(response.user._id).then(function(response){
  //       $scope.user = response;
  //       $state.go('journalentry');
  //       })
  //     }
  //   })
  // }
  //
  //
  //
  // $scope.createUser = function(user){
  //   mainService.createUser(user).then(function(response){
  //     $scope.newUser = response;
  //   })
  // }
})//end of angular.module
