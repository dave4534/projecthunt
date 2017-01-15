app.controller('detailController', ['$scope', 'mainService', function($scope, mainService){
	$scope.proj = mainService.companies;
	// console.log($scope.proj[0]);
	
	// console.log(companies);
	// debugger;
	// console.log(arr);
	
      
}]);