app.controller('detailController', ['$scope', 'mainService', function($scope, mainService){
	$scope.proj = mainService.companies;
	console.log($scope.proj[0]);
	$scope.bla = $scope.proj[0].projCompany;
	// console.log(companies);
	// debugger;
	// console.log(arr);
	
      
}]);