angular.module('app').directive('groupDirective', function(){
  console.log("group directive javascript loaded")
  return {
    restrict: 'E',
    replace: true,
    templateUrl: './js/directives/create-group.html',
    link: function(){
      console.log('Group directive loaded')
    }
  }

}); //end of directive
