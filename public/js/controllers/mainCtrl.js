app.controller('mainController', ['$scope', 'mainService', function($scope, mainService){

  $scope.alertMe = function(){
    console.log('hi there!');
  };


}]);