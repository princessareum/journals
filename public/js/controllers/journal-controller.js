angular.module('app').controller('journalController', function($scope, mainService, $state, user, $stateParams){

  $scope.groupId = $stateParams.groupId;
  $scope.albumId = $stateParams.albumId;
  $scope.images = [];
  $scope.user = user;


  // $scope.currentUser = function(){
  //   mainService.currentUser().then(function(response){
  //     $scope.loggedInUser = response;
  //     $scope.getJournal();
  //   }).catch(function(err){
  //     $state.go('/login');
  //   })
  // }
  // $scope.currentUser();


  $scope.postJournal = function(journal){
    console.log($scope.images)
    journal.photo = $scope.images[0].Location;
    journal.author = $scope.user._id;
    // journal.relationship = $scope.user.relationToBaby;
    journal.album = $stateParams.albumId;
    journal.group = $stateParams.groupId;
    mainService.postJournal(journal).then(function(response){
      //
      mainService.updateAlbum(journal.album, response._id).then(function(response){
        $state.go('journal',{
          groupId: $stateParams.groupId,
          albumId: $stateParams.albumId
        })
      })
    })
  };


  // $scope.getJournal = function(){
  //   mainService.getJournal($scope.user._id).then(function(response){
  //     $scope.journals = response;
  //
  //   })
  // }
  //
  //



});//end of controller
