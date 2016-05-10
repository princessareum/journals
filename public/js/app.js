angular.module('app', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/journalentry');

    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: './routes/login.html'
      })

      .state('signup', {
        url: '/signup',
        templateUrl: './routes/signup.html'
      })

      .state('journalentry', {
        url: '/journalentry',
        templateUrl: './routes/journal-entry.html'
      })



  })
