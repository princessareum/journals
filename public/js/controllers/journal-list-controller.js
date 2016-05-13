angular.module('app').controller('journalListController', function($scope, mainService, user, $stateParams){

  $scope.user = user;
  $scope.albumId = $stateParams.id;

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
      // console.log($scope.journals)
    })
  }();

  console.log($stateParams.id);

}); //end of module
