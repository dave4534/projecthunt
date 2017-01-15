var app = angular.module('projectHunt', ['ui.router']);

app.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

$stateProvider
    .state('home', {
    url: '/home',
    controller: 'mainController',
    templateUrl: './Templates/home.html'
    })
    .state('dashboard', {
    url: '/dashboard',
    controller: 'projControl',
    templateUrl:'./Templates/dashboard.html'
    })
    .state('register', {
    url: '/register',
    controller: 'mainController',
    templateUrl:'./Templates/register.html'
    })
     .state('login', {
    url: '/login',
    templateUrl:'./Templates/login.html'
    })
    .state('callback', {
      url: '/callback',
      controller: 'loginController',
      templateUrl: './Templates/callback.html'
    });

    $urlRouterProvider.otherwise('/home');

}]);
