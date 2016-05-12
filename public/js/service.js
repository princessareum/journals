angular.module('app').service('mainService', function($http){


// User
  this.createUser = function(user){
    return $http({
      method: 'POST',
      url: '/auth',
      data: user
    }).then(function(response){
      return response.data;
    })
  };

  this.login = function(user){
    return $http({
      method: 'POST',
      url: '/auth',
      data: user
    }).then(function(response){
      return response.data;
    })
  };

  this.currentUser = function(){
    return $http({
      method: 'GET',
      url: '/api/user/current'
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

  this.getUserByEmail = function(emails){
    return $http({
      method: 'POST',
      url: '/api/user/email',
      data: {
        emails: emails
      }
    }).then(function(response){
      return response.data;
    })
  };


// Journal
  this.postJournal = function(journal){
    return $http({
      method: 'POST',
      url: '/api/journal',
      data: journal
    }).then(function(response){
      return response.data;
    })
  };

  this.getJournal = function(userId){
    return $http({
      method: 'GET',
      url: '/api/journal?author='+userId
    }).then(function(response){
      return response.data;
    })
  };

  this.getJournalByAlbum = function(albumId){
    return $http({
      method: 'GET',
      url: '/api/journal?album='+albumId
    }).then(function(response){
      return response.data;
    })
  };


  this.storeImage = function (imageData, fileName, user) {
      var imageExtension = imageData.split(';')[0].split('/');
      imageExtension = imageExtension[imageExtension.length - 1];
      console.log(user);
      var newImage = {
        imageName: fileName,
        imageBody: imageData,
        imageExtension: imageExtension,
        userEmail: user.userEmail
      }

      return $http.post('/api/newimage', newImage).then(function(response){
        console.log(response)
        return response.data;
      })
  };


// Group
  this.createGroup = function(group){
    return $http({
      method: 'POST',
      url: '/api/group',
      data: group
    }).then(function(response){
      return response.data;
    })
  };

  this.getGroup = function(userId){
    return $http({
      method: 'GET',
      url: '/api/group?users='+ userId
    }).then(function(response){
      return response.data;
    })
  };

  // this.getGroupById = function(groupId){
  //   return $http({
  //     method: 'GET',
  //     url: '/api/group?_id='+groupId
  //   }).then(function(response){
  //     return response.data;
  //   })
  // }


  // this.deleteGroup = function(groupId){
  //   return $http({
  //     method: 'DELETE',
  //     url: '/api/group/'+groupId
  //   })
  // }


// Album
  this.createAlbum = function(album){
    return $http({
      method: 'POST',
      url: '/api/album',
      data: album
    }).then(function(response){
      return response.data;
    })
  };

  this.getAlbum = function(groupId){
    return $http({
      method: 'GET',
      url: '/api/album?group='+groupId
    }).then(function(response){
      return response.data;
    })
  };




})// end of angular.module
