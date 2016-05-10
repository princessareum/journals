angular.module('app').service('mainService', function($http){
  this.postJournal = function(journal){
    return $http({
      method: 'POST',
      url: '/api/journal',
      data: journal
    }).then(function(response){
      return response.data;
    })
  }


  this.storeImage = function (imageData, fileName) {
      var imageExtension = imageData.split(';')[0].split('/');
      imageExtension = imageExtension[imageExtension.length - 1];

      var newImage = {
        imageName: fileName,
        imageBody: imageData,
        imageExtension: imageExtension,
        userEmail: 'obama@usa.gov'
      }

      return $http.post('/api/newimage', newImage).then(function(response){
        console.log(response)
        return response.data;
      })
    }

})// end of angular.module
