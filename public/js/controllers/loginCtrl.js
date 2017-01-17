app.controller('loginController', ['$scope', '$http', '$httpParamSerializer', '$window', function($scope, $http, $httpParamSerializer, $window) {
  console.log("in controller");
  var code = $window.location.toString().replace(/.+code=/, '');
  console.log("jjjjjj",$window.location.toString);
  $window.opener.postMessage(code, $window.location);
  console.log(code);
  $window.close();

}])
