angular.module('app').directive('navDirective', function(){

  return {
    restrict: 'E',
    templateUrl: './js/directives/nav.html',
    controller: 'navController', function($scope, mainService, $state){
      $scope.logout = function(){
        mainService.logout().then(function(response){
          alert('You are successfully logged out!')
          $state.go('home');
        })
      }
    }
  }

}); //end of directive
