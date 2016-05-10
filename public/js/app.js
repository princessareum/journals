angular.module('app', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/journallist');

    $stateProvider
      .state('journalentry', {
        url: '/journalentry',
        templateUrl: './routes/journal-entry.html'
      })

      .state('journallist', {
        url: '/journallist',
        templateUrl: './routes/journals.html'
      })

  })
