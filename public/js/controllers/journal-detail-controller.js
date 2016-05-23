angular.module('app').controller('journalDetailController', function($scope, mainService, $stateParams, user){

  $scope.journalModalShown = false;
  $scope.toggleJournalModal = function(){
    $scope.journalModalShown = !$scope.journalModalShown;
  };


  // console.log(user);

  $scope.user = user;
  $scope.journalId = $stateParams.journalId;
  $scope.albumId = $stateParams.albumId;
  $scope.groupId = $stateParams.groupId;
  $scope.images = [];

  // console.log($scope.journalId, $scope.groupId, $scope.albumId);



  $scope.getJournalById = function(){
    // console.log('getting journal');
    mainService.getJournalById($scope.journalId).then(function(response){
      response[0].date = new Date(response[0].date);
      $scope.journal = response[0];
      // console.log($scope.journal)
    })
  };

  $scope.getJournalById();

  $scope.selectJournal = function(journal){
    $scope.selectedJournal = journal;
  };


  $scope.updateJournal = function(journal){
    journal.photo = $scope.images[0].Location;
    mainService.updateJournal(journal._id, journal).then(function(response){
    $scope.updatedJournal = response;
    $scope.toggleJournalModal();
    })
  };

  $scope.getJournalByAlbum = function(){
    mainService.getJournalByAlbum($scope.albumId).then(function(response){
      $scope.journals = response;
      $scope.journals.reverse();
      //
    })
  };
  $scope.getJournalByAlbum();


  $scope.deleteJournal = function(journalId){
    var confirmation = confirm('Are you sure you want to delete this journal?');
    if(!confirmation){
      return
    }
      mainService.deleteJournal(journalId).then(function(response){
        $scope.journalList = response;
        $scope.getJournalByAlbum();
      })
  };



})
