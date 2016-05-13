angular.module('app').controller('albumController', function($scope, mainService, user, $stateParams){

  $scope.modalShown = false;
  $scope.toggleModal = function(){
    $scope.modalShown = !$scope.modalShown;
  };

  $scope.user = user;


  $scope.createAlbum = function(album){
    album.group = $stateParams.id;

    mainService.createAlbum(album).then(function(response){
      $scope.newAlbum = response;

      $scope.getAlbum($stateParams.id);
    });
  }

  $scope.getAlbum = function(groupId){
    mainService.getAlbum(groupId).then(function(response){
      $scope.albums = response;
      // console.log($scope.albums);
      // console.log($scope.albums[0].content[0].photo)
    })
  };
  $scope.getAlbum($stateParams.id);

  $scope.getJournal = function(){
    mainService.getJournal($scope.user._id).then(function(response){
      $scope.journals = response;

    })
  };

  $scope.getJournal();

  $scope.selectAlbum = function(album){
    $scope.selectedAlbum = album;

  };

});
