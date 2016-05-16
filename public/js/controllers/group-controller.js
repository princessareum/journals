angular.module('app').controller('groupController', function($scope, user, mainService){

  $scope.modalShown = false;
  $scope.toggleModal = function(){
    $scope.modalShown = !$scope.modalShown;
  };

  $scope.editModalShown = false;
  $scope.toggleEditModal = function(){
    $scope.editModalShown = !$scope.editModalShown;
  };


  $scope.user = user;


  $scope.getGroup = function(){
    // console.log($scope.user, user);
    mainService.getGroup($scope.user._id).then(function(response){
      $scope.groups = response;
    })
  };

$scope.getGroup();

  $scope.getUserByEmail = function(emails){
    var newEmails = emails.split(', ');
    // console.log(newEmails);
    mainService.getUserByEmail(newEmails).then(function(response){
      $scope.group.users = response;
      // console.log(response);
      $scope.createGroup();
    })
  }

  $scope.createGroup = function(){
    $scope.group.admin = $scope.user._id;
    $scope.group.users.push($scope.user._id);
    mainService.createGroup($scope.group).then(function(response){
      $scope.newGroup = response;
      // console.log($scope.newGroup);
      $scope.getGroup();
      $scope.toggleModal();
    })
  };

  $scope.selectGroup = function(group){
    $scope.selectedGroup = group;
    // console.log($scope.selectedGroup);
  };


  $scope.updateGroup = function(group){
      mainService.updateGroup(group._id, group).then(function(response){
        $scope.updatedGroup = response;
        $scope.getGroup();
        $scope.toggleModal();
      })
  };

  $scope.deleteGroup = function(groupId){
      mainService.deleteGroup(groupId).then(function(response){
        $scope.groupList = response;
        $scope.getGroup();
      })
  };


})
