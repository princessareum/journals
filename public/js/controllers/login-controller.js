angular.module('app').controller('loginController', function($scope, mainService, $state){

  $scope.getUser = function(){
        mainService.getUser($scope.user._id).then(function(response){
            $scope.user = response;
        })
    };


  $scope.login = function(user){
    mainService.login(user).then(function(response){
      if(response.login){ mainService.getUser(response.user._id).then(function(response){
        $scope.user = response;
        $state.go('group');
        })
      }
    })
  }

}); //end of angular module
