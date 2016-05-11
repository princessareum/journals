angular.module('app', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/login');

    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: './routes/login.html',
        controller: 'loginController'
      })

      .state('signup', {
        url: '/signup',
        templateUrl: './routes/signup.html',
        controller: 'signupController'
      })

      .state('journalentry', {
        url: '/journalentry',
        templateUrl: './routes/journal-entry.html',
        controller: 'journalController',
        resolve: {
          user: function(mainService, $state){
                  return mainService.currentUser().then(function(response){
                    return response;
                  }).catch(function(err){
                    $state.go('login');
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
                    return response;
                  }).catch(function(err){
                    $state.go('login');
                  })
                }
          }
      })



  })
