angular.module('app').directive('navDirective', function(){

  return {
    restrict: 'E',
    templateUrl: './js/directives/nav.html',
    controller: function($scope, mainService){
      $scope.logout = function(){
        mainService.logout().then(function(response){
          $state.go('home');
        })
      }
    }
  }

}); //end of directive
