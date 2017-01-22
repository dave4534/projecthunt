app.factory('userService', ['$http', function($http){
  var userData = {

  dummyData : [{
  projTitle: "Responsive Budget Monitor",
  projCompany: "Bizzabo",
  projDescription: "Build a web app works well on mobile for monitoring budgets. The app should track how muchcash you (and your partner/family) are spending. For example, how much was spent on fuel,food, rent etc...",
  langTags: ["angular", "javascript", "mongo", "express"],
  // projDueDate: Date
  },
  {
  projTitle: "Company Podcast",
  projCompany: "jolt",
  projDescription: "As a means to keep everybody in your company up to date, create a system where employeescan leave voice messages that will get aggregated on a daily basis and aggregate them createa company podcast.",
  langTags: ["react", "javascript", "html", "css"],
  // projDueDate: Date
  },
  {
  projTitle: "FanCo",
  projCompany: "IBM",
  projDescription: "FanCo. is a new player in the handheld misting fan market. The startup is based in Boston, which is also its primary market. FanCo. has been highly successful in this market, and is launching in New York City on this summer.",
  langTags: ["react", "angular", "NodeJS"],
  // projDueDate: Date
  }
],

submitData : [],

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

