angular.module('app').directive('editAlbum', function(){

  return {
    restrict: 'E',
    replace: true,
    // scope: {
    //   album: "="
    // },
    templateUrl: './js/directives/edit-album.html'
  }

}); //end of directive
