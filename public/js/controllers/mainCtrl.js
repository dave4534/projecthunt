app.controller('mainController', ['$scope', 'mainService','$http','$window', "$httpParamSerializer", function($scope, mainService, $http, $window, $httpParamSerializer){

  $scope.companies = mainService.companies;


  $scope.githubLogin = function(){
  //   $.ajax({
  //     url:   "https://github.com/login/oauth/authorize",
  //     data:{  client_id: "eea27bdfce0e49527b31",
  //             redirect_url: "http://localhost:4000/home",
  //             scope: "user"
  //         },
  //     async: false
  // });
    var baseUrl = "https://github.com/login/oauth/authorize";
    var params = {
      client_id: "eea27bdfce0e49527b31",
      redirect_url: "http://localhost:4000/callback",
      scope: "user repo"
    };
    var qs = $httpParamSerializer(params);
    url = baseUrl + "?" + qs
    $window.open(url);
  }

  $window.addEventListener('message', function (event) {
  	var code = event.data;
  	$scope.codeInput = code
    code = code.substring(0, 20);
    getAccToken(code);
    })

  //
  getAccToken = function(code){
    console.log("in acc token");
    $http({
    method: 'POST',
    url: '/gitlog',
    data: {
      code: code
    }
  });
}
  // }).then(function successCallback(response) {
  //   console.log(response);
  //   console.log("in success");
  //   }, function errorCallback(response) {
  //     console.log("in error");
  //   });
  //   }
  // $scope.alertMe = function(){
  //   console.log('hi there!');
  // };

mainService.getAll().then(function(){
  // console.log('controller getAll invoked');
  // $scope.companies = mainService.companies;
  console.log($scope.companies);
}).catch(function(err){
  console.log(err);
});


}]);
