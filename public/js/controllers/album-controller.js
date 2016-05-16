angular.module('app').controller('albumController', function($scope, mainService, user, $stateParams){

  $scope.modalShown = false;
  $scope.toggleModal = function(){
    $scope.modalShown = !$scope.modalShown;
  };

  $scope.editModalShown = false;
  $scope.editToggleModal = function(){
    $scope.editModalShown = !$scope.editModalShown;
  };



  $scope.user = user;
  $scope.groupId = $stateParams.groupId;
  $scope.albumId = $stateParams.albumId;




  $scope.createAlbum = function(album){
    album.group = $stateParams.groupId;
    album.author = $scope.user._id;
    mainService.createAlbum(album).then(function(response){
      $scope.newAlbum = response;
      // console.log(response)
      $scope.getAlbum($scope.groupId);
      // console.log($scope.groupId)
    });
    $scope.toggleModal();
  };


  $scope.getAlbum = function(groupId){
    mainService.getAlbum(groupId).then(function(response){
      $scope.albums = response;
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

  $scope.updateAlbum = function(album){
      mainService.updateAlbum(album).then(function(response){
        $scope.updatedAlbum = response;
        $scope.getAlbum();
        $scope.editToggleModal();
      });
  };


  $scope.deleteAlbum = function(albumId){
      mainService.deleteAlbum(albumId).then(function(response){
        $scope.albumList = response;
        $scope.getAlbum();
      })
  };

});
