angular.module('app').directive('homeDirective', function(){

  return {
    restrict: 'E',
    templateUrl: './js/directives/home-nav.html',
    controller: 'navController'
}

}); //end of directive
