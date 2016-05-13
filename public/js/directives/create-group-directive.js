angular.module('app').directive('groupDirective', function(){

  return {
    restrict: 'E',
    replace: true,
    templateUrl: './js/directives/create-group.html',
    // link: function(){
    //   console.log('Group directive loaded')
    // }
  }

}); //end of directive
