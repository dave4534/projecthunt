app.controller('detailController', ['$scope', 'userService', function($scope, userService){

  $scope.proj = userService.dummyData; // IN USER.HTML

  $scope.subProj = userService.submitData; //IN SUBMITPROJECT.HTML

console.log(userService.dummyData);
// userService.getAllDash().then(function(){
//  console.log("get all dash from detailController");
//  console.log($scope.x);
// }).catch(function(err){
//  console.log(err);
// });

$scope.passProj = function(proj){
  console.log("button works");
  userService.submitData.push(proj);
}



}]);
