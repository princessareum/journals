angular.module('app').controller('journalListController', function($scope, mainService, user, $stateParams){

  $scope.user = user;
  $scope.albumId = $stateParams.albumId;
  $scope.groupId = $stateParams.groupId;
  console.log($scope.albumId, $scope.groupId);

  // $scope.getJournal = function(){
  //   mainService.getJournal($scope.user._id).then(function(response){
  //     $scope.journals = response;
  //     console.log(response);
  //   })
  // }

  $scope.getJournalByAlbum = function(){
    mainService.getJournalByAlbum($scope.albumId).then(function(response){
      $scope.journals = response;
      $scope.journals.reverse();
      // console.log(response);
    })
  };
  $scope.getJournalByAlbum();

  $scope.journalModalShown = false;
  $scope.toggleJournalModal = function(){
    $scope.journalModalShown = !$scope.journalModalShown;
  };

  $scope.selectJournal = function(journal){
    $scope.selectedJournal = journal;
    // console.log($scope.selectedJournal);
  };


  $scope.updateJournal = function(journal){
    mainService.updateJournal(journal._id, journal).then(function(response){
    $scope.updatedJournal = response;
    $scope.toggleJournalModal();
    })
  }

  $scope.deleteJournal = function(journalId){
      mainService.deleteJournal(journalId).then(function(response){
        $scope.journalList = response;
        $scope.getJournalByAlbum();
      })
  };


}); //end of module
