app.controller('registerController', ['$scope', '$state', function($scope, $state){

  //  = inputId;

// comp = $scope.compName
$scope.checkName = function(next){
  if ($scope.compName === undefined) {
    alert("Company must have a name!");
    // console.log("company must have a name!");

    // $state.go('http://localhost:4008/#/register');
  }
  else {
    $scope.registerSave($scope.compName);
  }
}

  $scope.registerSave = function(name){
    console.log("button work");
    $state.go('dashboard');
  }

}])
