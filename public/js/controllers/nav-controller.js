angular.module('app').controller('navController', function($scope, mainService, $state, $stateParams){

  $scope.state = $state.current.name;
  // console.log($scope.state);

  $scope.getGroupById = function(){
    mainService.getGroupById($stateParams.groupId).then(function(response){
      $scope.group = response[0];
    });
  }

  $scope.getAlbumById = function(){
    mainService.getAlbumById($stateParams.albumId).then(function(response){
      $scope.album = response[0];
    });
  }





  if($scope.state === 'album'){
    $scope.groupId = $stateParams.groupId;
    $scope.getGroupById();
  }
  if ($scope.state === 'journal' || $scope.state === 'journalentry') {
    $scope.groupId = $stateParams.groupId;
    $scope.albumId = $stateParams.albumId;
    $scope.getAlbumById();
  }

  // function($scope, mainService, $state){
    $scope.logout = function(){
      mainService.logout().then(function(response){
        alert('You are successfully logged out!')
        $state.go('home');
      })
    }
  // }

  $(document).ready(function(){
    $( ".cross" ).hide();
    $( ".menu" ).hide();
    $( ".hamburger" ).click(function() {
    $( ".menu" ).slideToggle( "fast", function() {
    $( ".hamburger" ).hide();
    $( ".cross" ).show();
    });
    });

    $( ".cross" ).click(function() {
    $( ".menu" ).slideToggle( "fast", function() {
    $( ".cross" ).hide();
    $( ".hamburger" ).show();
    });
    });

  })
});
