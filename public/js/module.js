var app = angular.module('projectHunt', ['ui.router']);

app.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

$stateProvider
    .state('home', {
    url: '/home',
    controller: 'mainController',
    templateUrl: '../home.html'
    })
    .state('home.dashboard', {
    url: '/spotify',
    controller: 'mainController',
    templateUrl:'./Templates/dashboard.html'
    })
    .state('home.register', {
    url: '/register',
    controller: 'mainController',
    templateUrl:'./Templates/register.html'
    })
     .state('home.login', {
    url: '/login',
    controller: 'mainController',
    templateUrl:'./Templates/login.html'
    });

    $urlRouterProvider.otherwise('/dashboard');

}]);

