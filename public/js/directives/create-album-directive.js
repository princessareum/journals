angular.module('app').directive('albumDirective', function(){
  console.log("Album directive javascript loaded")
  return {
    restrict: 'E',
    replace: true,
    templateUrl: './js/directives/create-album.html'
  }

}); //end of directive
