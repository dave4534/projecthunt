app.factory('projService', ['$http', function($http){
  var serviceData = {

    // TEST COMMENT

  dummyData : [
    {
    projTitle: "proj1",
    projCompany: "elevation",
    projDescription: "make me a proj1",
    langTags: ["angular", "html", "bootstrap", "express"],
    // projDueDate: Date
    }
  ]

  // getProj: function(id){
  //   return $http.get()
  // }

  }
  return serviceData;
}])
