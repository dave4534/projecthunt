var app = angular.module('projectHunt', ['ui.router', 'ngTagsInput']);

app.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

$stateProvider
    .state('welcome', {
    url: '/welcome',
    controller: 'mainController',
    templateUrl: './Templates/welcome.html'
    })
    .state('home', {
    url: '/home',
    controller: 'mainController',
    templateUrl: './Templates/home.html'
    })
    .state('dashboard', {
    url: '/dashboard/:comp',
    controller: 'projControl',
    templateUrl:'./Templates/newProjectForm.html',
    resolve: {
          getToDash: ['mainService', '$stateParams' , function(mainService, $stateParams) {
            console.log($stateParams.comp);
            return mainService.getAllDash($stateParams.comp);
          }]
        }
    })
    .state('register', {
    url: '/register',
    controller: 'registerController',
    templateUrl:'./Templates/register.html'
    })
    //  .state('proj1', {
    // url: '/dashboard/proj1',
    // controller: 'mainController',
    // templateUrl:'./Templates/proj1.html'
    // })
     .state('login', {
    url: '/welcome',
    // controller: 'mainController',

    templateUrl:'./Templates/welcome.html',

    // resolve: {
    //   setId: ['userService', '$stateParams', function(userService, stateParams){
    //     return userService.idCheck($stateParams.id);
    //   }]
    // }
    })
      .state('createproject', {
    url: '/createproject',
    // controller: 'projControl',
    templateUrl:'./Templates/createproject.html'
    })
     .state('chooseteam', {
    url: '/chooseteam',
    // controller: 'projControl',
    templateUrl:'./Templates/chooseteam.html'
    })
     .state('submitproject', {
    url: '/submitproject',
    // controller: 'projControl',
    templateUrl:'./Templates/submitproject.html'
    })
      .state('project', {
    url: '/home/:id',
    // controller: 'detailController',
    templateUrl:'./Templates/proj1.html',
    resolve: {
        getDetails: ['mainService', '$stateParams' , function(mainService, $stateParams) {
            console.log($stateParams.id);
            console.log(mainService.companies)
            return mainService.getAllDetails($stateParams.id, mainService.companies);
          }]
    }
    })
    .state('user', {
    url: '/user',
    controller: 'detailController',
    templateUrl:'./Templates/user.html'
    // resolve: {
    //     getUserProj: ['userService', function(userService) {
    //         return userService.getAllDash(userService.dummyData);
    //       }]
    // }
    })
    .state('callback', {
      url: '/callback',
      controller: 'loginController',
      templateUrl: './Templates/callback.html'
        });

    $urlRouterProvider.otherwise('/welcome');

}]);
