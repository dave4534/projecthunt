app.controller('loginController', ['$scope', '$http', '$httpParamSerializer', '$window', function($scope, $http, $httpParamSerializer, $window) {
  // function auth() {
  //   var baseUrl = "https://github.com/login/oauth/access_token";
  //   var params = {
  //     client_id: "eea27bdfce0e49527b31",
  //     client_secret: "8cd28cfdfcfea91e492bc98f54723402bd853ed3"
  //     redirect_uri: "http://localhost:4000/home",
  //     code: $location.search().code
  //   };
  //   var qs = $httpParamSerializer(params);
  //   url = baseUrl + "?" + qs
  //   $window.open(url);
  // }
  //
  // auth();
  var code = $window.location.toString().replace(/.+code=/, '');
  console.log(code);
  $window.opener.postMessage(code, $window.location);
  $window.close();

}])
