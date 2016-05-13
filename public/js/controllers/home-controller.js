angular.module('app').controller('homeController', function($scope, user, mainService){

  $scope.modalShown = false;
  $scope.toggleModal = function(){
    $scope.modalShown = !$scope.modalShown;
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

});
