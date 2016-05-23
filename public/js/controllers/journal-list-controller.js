angular.module('app').controller('journalListController', function($scope, mainService, user, $stateParams){

  $scope.user = user;
  $scope.albumId = $stateParams.albumId;
  $scope.groupId = $stateParams.groupId;
  $scope.journalId = $stateParams.journalId;
  $scope.images = [];



  // $scope.getJournal = function(){
  //   mainService.getJournal($scope.user._id).then(function(response){
  //     $scope.journals = response;
  //
  //   })
  // }




  $scope.getJournalByAlbum = function(){
    mainService.getJournalByAlbum($scope.albumId).then(function(response){
      $scope.journals = response;
      $scope.journals.reverse();
    })
  };
  $scope.getJournalByAlbum();


  $scope.selectJournal = function(journal){
    journal.date = new Date(journal.date);
    $scope.selectedJournal = journal;
  };




}); //end of module
