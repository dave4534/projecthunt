app.factory('projService', ['$http', function($http){
  var serviceData = {

  dummyData : [
    {
    projTitle: "proj1",
    projCompany: "elevation",
    projDescription: "make me a proj1",
    langTags: ["angular"],
    // projDueDate: Date
    }
  ]

  // getProj: function(id){
  //   return $http.get()
  // }

  }
  return serviceData;
}])
