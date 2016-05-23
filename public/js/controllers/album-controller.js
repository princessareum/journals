angular.module('app').controller('albumController', function($scope, mainService, user, $stateParams){

  $scope.modalShown = false;
  $scope.toggleModal = function(){
    $scope.modalShown = !$scope.modalShown;
  };


  $scope.editModalShown = false;
  $scope.editToggleModal = function(album){
    $scope.editModalShown = !$scope.editModalShown;
    if(album){
      $scope.selectedAlbum = album;
    }
  };


  $scope.user = user;
  $scope.groupId = $stateParams.groupId;
  $scope.albumId = $stateParams.albumId;


  $scope.createAlbum = function(album){
    album.group = $stateParams.groupId;
    album.author = $scope.user._id;
    mainService.createAlbum(album).then(function(response){
      $scope.newAlbum = response;
      $scope.getAlbum($scope.groupId);
      $scope.album.title = "";
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


  $scope.getJournalByAlbum = function(albumId){
    mainService.getJournalByAlbum(albumId).then(function(response){
      $scope.albumJournals = response;
    })
  };


  $scope.selectAlbum = function(album){
    $scope.selectedAlbum = album;
  };


  $scope.updateAlbum = function(album){
      mainService.updateAlbum(album).then(function(response){
        $scope.updatedAlbum = response;
        $scope.getAlbum($scope.groupId);
        $scope.editToggleModal();
        $scope.updatedAlbum = "";
      });
  };


  $scope.deleteAlbum = function(albumId){
    var confirmation = confirm('Are you sure you want to delete this Album?');
    if(!confirmation){
      return
    }
      mainService.deleteAlbum(albumId).then(function(response){
        $scope.albumList = response;
        $scope.getAlbum($scope.groupId);
      })
  };



});
