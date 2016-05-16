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
        url: '/journals/:groupId/:albumId',
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



  })
