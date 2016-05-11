angular.module('app').controller('journalController', function($scope, mainService, $state, user){

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
    console.log(journal.author)
    mainService.postJournal(journal).then(function(response){
      $scope.newJournal = response;
      $scope.getJournal();
    })
  }

  $scope.getJournal = function(){
    mainService.getJournal($scope.user._id).then(function(response){
      $scope.journals = response;
      console.log(response);
    })
  }





});//end of controller
