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
        url: '/journalentry/:id',
        templateUrl: './routes/journal-entry.html',
        controller: 'journalController',
        resolve: {
          user: function(mainService, $state){
                  return mainService.currentUser().then(function(response){
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
          user: function(mainService){
                  return mainService.currentUser().then(function(response){
                    console.log(response);
                    return response;
                  }).catch(function(err){
                    $state.go('home');
                  })
                }
          }
      })

      .state('album', {
        url: '/albums/:id',
        templateUrl: './routes/album.html',
        controller: 'albumController',
        resolve: {
          user: function(mainService){
                  return mainService.currentUser().then(function(response){
                    return response;
                  }).catch(function(err){
                    $state.go('home');
                  })
                }
          // },
          // group: function(mainService, $stateParams){
          //         // return mainService.getGroupById($stateParams.id);
          //         return $stateParams.id;
          }
      })

      .state('journal', {
        url: '/journals/:id',
        templateUrl: './routes/journal-list.html',
        controller: 'journalListController',
        resolve: {
          user: function(mainService){
                  return mainService.currentUser().then(function(response){
                    return response;
                  }).catch(function(err){
                    $state.go('home');
                  })
                }
              }
      })



  })
