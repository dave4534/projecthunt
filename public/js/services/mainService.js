app.factory('mainService', ['$http', function($http){
  var serviceData = {
    companies: [
    
      // {
      //   projTitle: "daves proj",
      //   projCompany: "daves comp",
      //   projDescription: {
      //     desc: "daves desc",
      //     langTags: ['angular']
      //   }
      // }
      
    ],
    getAllDash: function(){
      console.log('service getAllDash invoked');
      return $http.get('/dashboard').then(function(res){
        angular.copy(res.data, serviceData.companies);
      }).catch(function(err){
        console.error(err);
      });
    },

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
