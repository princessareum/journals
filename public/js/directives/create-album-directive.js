angular.module('app').directive('albumDirective', function(){

  return {
    restrict: 'E',
    replace: true,
    templateUrl: './js/directives/create-album.html'
  }

}); //end of directive
