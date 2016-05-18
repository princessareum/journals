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
    //
    mainService.getGroup($scope.user._id).then(function(response){
      $scope.groups = response;
    })
  };
  $scope.getGroup();


  $scope.getUserByEmail = function(emails, type){
    var newEmails = emails.split(', ');

    mainService.getUserByEmail(newEmails).then(function(response){
      var ids = [];

      for (var i = 0; i < response.length; i++) {
        ids.push(response[i]._id);
      }
      //
        if(type === 'create'){
          $scope.group.users = ids;
          $scope.createGroup();
        } else {
          $scope.updateGroup($scope.selectedGroup);
            $scope.selectedGroup.users = ids;
        }
    })
  };


  $scope.createGroup = function(){
    $scope.group.admin = $scope.user._id;
    $scope.group.users.push($scope.user._id);
    mainService.createGroup($scope.group).then(function(response){
      $scope.newGroup = response;
      //
      $scope.getGroup();
      $scope.toggleModal();
    })
  };


  $scope.selectGroup = function(groupId){
    mainService.getAndPopulateGroup(groupId).then(function(response){

      var emails = '';
      for (var i = 0; i < response.users.length; i++) {
        emails = emails + response.users[i].userEmail;
        if(i+1 !== response.users.length){
          emails += ', ';
        }
      }
      response.users = emails;
      $scope.selectedGroup = response;
    })
    //
  };


  $scope.updateGroup = function(group){
      mainService.updateGroup(group._id, group).then(function(response){
        $scope.updatedGroup = response;
        $scope.getGroup();
        $scope.toggleEditModal();
      })
  };


  $scope.deleteGroup = function(groupId){
      mainService.deleteGroup(groupId).then(function(response){
        $scope.groupList = response;
        $scope.getGroup();
      })
  };


})// end of module
