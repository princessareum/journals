angular.module('app').directive('groupDirective', function(){

  return {
    restrict: 'E',
    replace: true,
    templateUrl: './js/directives/create-group.html'
  }

}); //end of directive
