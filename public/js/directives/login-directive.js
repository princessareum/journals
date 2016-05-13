angular.module('app').directive('loginDirective', function(){

  return {
    restrict: 'E',
    templateUrl: './js/directives/login.html',
    controller: 'loginController'
  }

}); //end of directive
