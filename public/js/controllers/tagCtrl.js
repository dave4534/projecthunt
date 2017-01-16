app.controller('tagController', ['$scope', 'mainService', function($scope, mainService){


  $scope.langTags = [];
  $scope.tagArray = [];

  // $scope.langTags.push('jdhf');
  // for(var i = 0; i<)
	// $scope.pushToArr = function(){
 //  		for each(var i in $scope.langTags) {
 //  		$scope.tagArray.push(i);
 //  		}

	// }

	$scope.langTags.forEach(function(a) {
		$scope.tagArray.push(a);
		console.log(a);
	})
console.log($scope.tagArray);

}]);