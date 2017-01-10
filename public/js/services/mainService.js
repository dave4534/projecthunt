app.factory('mainService', ['$http', function($http){
  var serviceData = {
    companies: [
    {
      companyName: "Jolt",
      location: "Tel Aviv",
      projects: [
      {
        title: "project1",
        desc: "project1 desc",
        dueDate: "Jan 1 2017"
      },
      {
        title: "project2",
        desc: "project2 desc",
        dueDate: "Jan 2 2017"
      },
      {
        title: "project3",
        desc: "project3 desc",
        dueDate: "Jan 3 2017"
      }
      ]
    }
    ]
  };

  return serviceData;


}]);
