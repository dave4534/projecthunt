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
    controller: 'mainController',
    templateUrl:'./Templates/login.html'
    });

    $urlRouterProvider.otherwise('/home');

}]);

