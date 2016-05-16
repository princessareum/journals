angular.module('app').controller('albumController', function($scope, mainService, user, $stateParams){

  $scope.modalShown = false;
  $scope.toggleModal = function(){
    $scope.modalShown = !$scope.modalShown;
  };

  $scope.user = user;
  $scope.groupId = $stateParams.groupId;

  $scope.createAlbum = function(album){
    album.group = $stateParams.groupId;
    mainService.createAlbum(album).then(function(response){
      $scope.newAlbum = response;
      // console.log(response)
      $scope.getAlbum($scope.groupId);
      // console.log($scope.groupId)
    });
    $scope.toggleModal();
  }

  $scope.getAlbum = function(groupId){
    mainService.getAlbum(groupId).then(function(response){
      $scope.albums = response;
      // console.log($scope.albums);
      // console.log($scope.albums[0].content[0].photo)
      // console.log($scope.albums);
    })
  };
  $scope.getAlbum($scope.groupId);


  $scope.getJournal = function(){
    mainService.getJournal($scope.user._id).then(function(response){
      $scope.journals = response;
    })
  };

  $scope.getJournal();

  $scope.selectAlbum = function(album){
    $scope.selectedAlbum = album;

  };

  // $scope.updateAlbum = function(albumId){
  //     mainService.updateAlbum(albumId).then(function(response){
  //       $scope.updatedAlbum = response;
  //       $scope.getAlbum();
  //     })
  //   }
  // };
  //
  // $scope.deleteAlbum = function(albumId){
  //     mainService.deleteAlbum(albumId).then(function(response){
  //       $scope.albumList = response;
  //       $scope.getAlbum();
  //     })
  //   }
  // };

});
