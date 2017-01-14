app.controller('mainController', ['$scope', 'mainService', function($scope, mainService){

$scope.companies = mainService.companies;


  // $scope.alertMe = function(){
  //   console.log('hi there!');
  // };

mainService.getAll().then(function(){
  console.log('controller getAll invoked');
  // $scope.companies = mainService.companies;
  console.log($scope.companies);
}).catch(function(err){
  console.log(err);
});

// $scope.readmore = function(){
//     $state.go('proj1');
//   };


}]);