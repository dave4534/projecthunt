app.controller('mainController', ['$scope', 'mainService', 'userService', '$http', '$window', "$httpParamSerializer", function($scope, mainService,userService, $http, $window, $httpParamSerializer){

  var gitData;

  $scope.companies = mainService.companies;


  $scope.githubLogin = function(){
    var baseUrl = "https://github.com/login/oauth/authorize";
    var params = {
      client_id: "eea27bdfce0e49527b31",
      redirect_url: "http://localhost:4008/?#/home",
      scope: "user repo"
    };
    var qs = $httpParamSerializer(params);
    url = baseUrl + "?" + qs
    console.log(url);
    $window.open(url);
  }



  $window.addEventListener('message', function (event) {
  	var code = event.data;
  	$scope.codeInput = code
    code = code.substring(0, 20);
    getAccToken(code);
    console.log(code);
  })


  //
  var getAccToken = function(code){
    console.log("in acc token");
     $http({
    method: 'POST',
    url: '/gitlog',
    data: {
      code: code
    }
  }).then(function successCallback (response){
    console.log("hi");
    console.log(response.data);
    // mainService.addUserToDB(response.data);
    findUser(response.data.gitID);
  });
}

var findUser = function(userId){
  console.log(userId);
  userService.idCheck(userId);
}


mainService.getAll().then(function(){
  console.log('controller getAll invoked');
  // $scope.companies = mainService.companies;
  console.log($scope.companies);
}).catch(function(err){
  console.log(err);
});


}]);
