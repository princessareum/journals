angular.module('app').directive('editGroup', function(){

  return {
    restrict: 'E',
    replace: true,
    templateUrl: './js/directives/edit-group.html'
  }

}); //end of directive
