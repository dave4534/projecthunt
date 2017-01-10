app.controller('mainController', ['$scope', 'mainService', function($scope, mainService){

$scope.companies = mainService.companies;


  $scope.alertMe = function(){
    console.log('hi there!');
  };


}]);