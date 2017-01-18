app.controller('projController', ['$scope', 'projService', '$state', function($scope, projService, $state){

  $scope.proj = projService.dummyData;



}])
