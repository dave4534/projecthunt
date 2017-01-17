app.controller('detailController', ['$scope', 'userService', function($scope, userService){

	$scope.proj = userService.dummyData;

console.log(userService.dummyData);
console.log($scope.company);
// userService.getAllDash().then(function(){
// 	console.log("get all dash from detailController");
// 	console.log($scope.x);
// }).catch(function(err){
// 	console.log(err);
// });

}]);
