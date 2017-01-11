app.factory('mainService', ['$http', function($http){
  var serviceData = {
    companies: [
    
      {
        logo: "logo",
        companyName: "Jolt",
        location: "Tel Aviv",
        title: "Responsive Budget Monitor",
        desc: "Build a web app works well on mobile for monitoring budgets.",
        dueDate: "Jan 1 2017"
      }
      
    ]
  };

  return serviceData;


}]);
