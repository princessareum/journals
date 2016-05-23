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
    mainService.getGroup($scope.user._id).then(function(response){
      $scope.groups = response;
    })
  };
  $scope.getGroup();


  $scope.getUserByEmail = function(emails, type){
    if(type === 'create'){
      var newEmails = emails.split(', ');
    } else {
      var newEmails = emails;
    }

    mainService.getUserByEmail(newEmails).then(function(response){
      var ids = [];
      // console.log(response);

      for (var i = 0; i < response.length; i++) {
        ids.push(response[i]._id);
      }
        if(type === 'create'){
          $scope.group.users = ids;
          $scope.createGroup();
        } else {
          $scope.selectedGroup.users = ids;
          $scope.updateGroup($scope.selectedGroup);
        }
    }).catch(function(err){
      console.log('ERROR');
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
      $scope.group = "";
    })
  };


  $scope.selectGroup = function(groupId){
    mainService.getAndPopulateGroup(groupId).then(function(response){

      var emails = [];
      for (var i = 0; i < response.users.length; i++) {
        emails.push(response.users[i].userEmail);
      }

      response.users = emails;
      $scope.selectedGroup = response;
      // console.log($scope.selectedGroup);
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

  $scope.addMember = function(newMember){
    $scope.selectedGroup.users.push(newMember);
    $scope.newMember = "";
  };

  $scope.removeMember = function(i){
    $scope.selectedGroup.users.splice(i, 1);
  };

  $scope.deleteGroup = function(groupId){
    var confirmation = confirm('Are you sure you want to delete this Group?');
    if(!confirmation){
      return
    }
      mainService.deleteGroup(groupId).then(function(response){
        $scope.groupList = response;
        $scope.getGroup();
      })
  };


})// end of module
