angular.module('app').controller('journalController', function($scope, mainService, $state, user, $stateParams){

  $scope.images = [];
  $scope.user = user;
  $scope.albumId = $stateParams.id;


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
    journal.relationship = $scope.user.relationToBaby;
    journal.album = $stateParams.id;
    mainService.postJournal(journal).then(function(response){
      console.log(response._id);
      mainService.updateAlbum(journal.album, response._id)
    })
    // mainService.updateAlbum(journal.album, jou)
  }

  // $scope.getJournal = function(){
  //   mainService.getJournal($scope.user._id).then(function(response){
  //     $scope.journals = response;
  //     console.log(response);
  //   })
  // }
  //
  //



});//end of controller
