app.factory('userService', ['$http', function($http){
  var userData = {

  dummyData : [{
  projTitle: "proj1",
  projCompany: "elevation",
  projDescription: "make me a proj1",
  langTags: ["angular"],
  // projDueDate: Date
  },
  {
  projTitle: "proj2",
  projCompany: "jolt",
  projDescription: "make me a proj2",
  langTags: ["jQuery"],
  // projDueDate: Date
  },
  {
  projTitle: "proj3",
  projCompany: "bizzabo",
  projDescription: "make me a proj3",
  langTags: ["react"],
  // projDueDate: Date
  }],

    // getAllDash: function(){
    //   console.log(' getAllDash invoked from service');
    //   // ADD USER ID TO URL
    //   return $http.get('/user')
    //   .then(function(res){
    //     console.log("getalldash!!!");
    //     console.log(res.data);
    //     // debugger;
    //     angular.copy(res.data, userData.dummyData);
    //     console.log('show me array!!!!!');
    //     // debugger;
    //   }).catch(function(err){
    //     console.error(err);
    //   });
    // }

    idCheck: function(id){
      console.log(id);
      return $http.get('/login/' + id).then(function(res){
        console.log(res);
      })
    }


  }
  return userData;
}]);
