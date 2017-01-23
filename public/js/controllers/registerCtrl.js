app.controller('registerController', ['$scope', '$state', function($scope, $state){

// comp = $scope.compName

  $scope.registerSave = function(name){
    console.log("button work");
    $state.go('http://localhost:4000/#/dashboard/' + name);
  }

}])
