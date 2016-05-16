angular.module('app').directive('editJournal', function(){

  return {
    restrict: 'E',
    replace: true,
    templateUrl: './js/directives/edit-journal.html'
  }

}); //end of directive
