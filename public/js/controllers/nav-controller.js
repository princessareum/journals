angular.module('app').controller('navController', function($scope, mainService, $state){

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
    $( ".menu" ).slideToggle( "slow", function() {
    $( ".hamburger" ).hide();
    $( ".cross" ).show();
    });
    });

    $( ".cross" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
    $( ".cross" ).hide();
    $( ".hamburger" ).show();
    });
    });

  })
});
