angular.module('app').directive('editAlbum', function(){

  return {
    restrict: 'E',
    replace: true,
    templateUrl: './js/directives/edit-album.html'
  }

}); //end of directive
