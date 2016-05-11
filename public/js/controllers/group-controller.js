angular.module('app').controller('groupController', function($scope, user, mainService){

  $scope.modalShown = false;
  $scope.toggleModal = function(){
    $scope.modalShown = !$scope.modalShown;
  };


  $scope.user = user;

  $scope.getGroup = function(){
    console.log($scope.user, user);
    mainService.getGroup($scope.user._id).then(function(response){
      $scope.group = response;
    })
  };

  $scope.getUserByEmail = function(emails){
    var newEmails = emails.split(', ');
    console.log(newEmails);
    mainService.getUserByEmail(newEmails).then(function(response){
      $scope.group.users = response;
      console.log(response);
      $scope.createGroup();
    })
  }

  $scope.createGroup = function(){
    $scope.group.admin = $scope.user._id;
    mainService.createGroup($scope.group).then(function(response){
      $scope.newGroup = response;
      console.log($scope.newGroup);
      $scope.getGroup();
    })
  };



})
