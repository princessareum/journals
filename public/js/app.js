angular.module('app', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: './routes/home.html'
      })
      //
      // .state('login', {
      //   url: '/login',
      //   templateUrl: './routes/login.html',
      //   controller: 'loginController'
      // })

      .state('signup', {
        url: '/signup',
        templateUrl: './routes/signup.html',
        controller: 'signupController'
      })

      .state('journalentry', {
        url: '/journalentry/:groupId/:albumId',
        templateUrl: './routes/journal-entry.html',
        controller: 'journalController',
        resolve: {
          user: function(mainService, $state){
                  return mainService.currentUser().then(function(response){
                    if(!response){
                      $state.go('home');
                    }
                    return response;
                  }).catch(function(err){
                    $state.go('home');
                  })
                }
          }
      })

      .state('group', {
        url: '/groups',
        templateUrl: './routes/group.html',
        controller: 'groupController',
        resolve: {
          user: function(mainService, $state){
                  return mainService.currentUser().then(function(response){
                    if(!response){
                      $state.go('home');
                    }
                    return response;
                  }).catch(function(err){
                    $state.go('home');
                  })
                }
          }
      })

      .state('album', {
        url: '/albums/:groupId',
        templateUrl: './routes/album.html',
        controller: 'albumController',
        resolve: {
          user: function(mainService, $state){
                  return mainService.currentUser().then(function(response){
                    if(!response){
                      $state.go('home');
                    }
                    return response;
                  }).catch(function(err){
                    $state.go('home');
                  })
                }
          }
      })

      .state('journal', {
        url: '/journallist/:groupId/:albumId',
        templateUrl: './routes/journal-list.html',
        controller: 'journalListController',
        resolve: {
          user: function(mainService, $state){
                  return mainService.currentUser().then(function(response){
                    if(!response){
                      $state.go('home');
                    }
                    return response;
                  }).catch(function(err){
                    $state.go('home');
                  })
                }
          }
      })

      .state('journaldetail', {
        url: '/journaldetail/:groupId/:albumId/:journalId',
        // url: '/journaldetail',
        // params: {
        //   'groupId': null,
        //   'albumId': null,
        //   'journalId': null,
        // },
        templateUrl: './routes/journal-detail.html',
        controller: 'journalDetailController',
        resolve: {
          user: function(mainService, $state){
            console.log("Starting resolve");
                  return mainService.currentUser().then(function(response){
                    console.log("Inside response");
                    if(!response){
                      console.log("no response");
                      $state.go('home');
                    }
                    return response;
                  }).catch(function(err){
                    console.log("no response");
                    $state.go('home');
                  })
                }
          }
      });



  })
