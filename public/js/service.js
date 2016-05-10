angular.module('app').service('mainService', function($http){


  this.createUser = function(user){
    return $http({
      method: 'POST',
      url: '/api/user',
      data: user
    }).then(function(response){
      return response.data;
    })
  };

  this.login = function(user){
    return $http({
      method: 'POST',
      url: '/api/user/login',
      data: user
    }).then(function(response){
      return response.data;
    })
  };

  this.getUser = function(userId){
    return $http({
      method: "GET",
      url: "/api/user/?_id="+userId,
    }).then(function(response){
      return response.data
    })
  };

  this.postJournal = function(journal){
    return $http({
      method: 'POST',
      url: '/api/journal',
      data: journal
    }).then(function(response){
      return response.data;
    })
  };

  this.storeImage = function (imageData, fileName, user) {
      var imageExtension = imageData.split(';')[0].split('/');
      imageExtension = imageExtension[imageExtension.length - 1];
      console.log(user[0]);
      var newImage = {
        imageName: fileName,
        imageBody: imageData,
        imageExtension: imageExtension,
        userEmail: user[0].userEmail
      }

      return $http.post('/api/newimage', newImage).then(function(response){
        console.log(response)
        return response.data;
      })
  };

})// end of angular.module
