app.factory('mainService', ['$http', function($http){
  var serviceData = {
    companies: [
    
      // {
      //   logo: "logo",
      //   companyName: "Shai Baam",
      //   location: "Tel Aviv",
      //   title: "Responsive Budget Monitor",
      //   desc: "Build a web app works well on mobile for monitoring budgets.",
      //   dueDate: "Jan 1 2017"
      // }
      
    ],

     getAll: function(){
      console.log('service getAll invoked');
      return $http.get('/home').then(function(res){
        angular.copy(res.data, serviceData.companies);
      }).catch(function(err){
        console.error(err);
      });
    }
  };

  return serviceData;


}]);
