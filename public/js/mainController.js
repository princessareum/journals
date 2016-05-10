angular.module('app').controller('mainController', function($scope, mainService){

  $scope.images = [];
  $scope.journalList = [];

  $scope.postJournal = function(journal){
    console.log($scope.images)
    journal.photo = $scope.images[0].Location;
    mainService.postJournal(journal).then(function(response){
      $scope.newJournal = response;
      $scope.journalList.push($scope.newJournal);
    })
  }


})//end of angular.module
