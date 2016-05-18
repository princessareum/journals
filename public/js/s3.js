angular.module('app')

.directive('fileread', function (mainService) {
  return {
    restrict: 'A',
    link: function (scope, elem, attrs) {
      elem.bind("change", function (changeEvent) {
        var reader = new FileReader();

        reader.onloadend = function (loadEvent) {
          var fileread = loadEvent.target.result;
          var tempArray = elem[0].value.split('\\');
          var fileName = tempArray[tempArray.length - 1];
          
          mainService.storeImage(fileread, fileName, scope.user)
          .then(function (result) {
            
            scope.images.unshift(result);
            
          })
          .catch(function (err) {
            console.error(err);
          });
        }
        reader.readAsDataURL(changeEvent.target.files[0]);
      });
    }
  }
})
