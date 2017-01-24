app.factory('mainService', ['$http', function($http){
  var serviceData = {
    companies: [],

    getAllDash: function(comp){
      console.log(comp);
      console.log(' getAllDash invoked from service');
      return $http.get('/dashboard/' + comp)
      .then(function(res){
        console.log("getalldash!!!");
        console.log(res.data);
        debugger;
        angular.copy(res.data, serviceData.companies);
        console.log('show me array!!!!!');
        // debugger;
      }).catch(function(err){
        console.error(err);
      });
    },

     getAll: function(){
      console.log('service getAll invoked');
      return $http.get('/home').then(function(res){
        angular.copy(res.data, serviceData.companies);
      })
      .catch(function(err){
        console.error(err);
      });
    },

    postToDash: function(project) {
      console.log(project.projCompany);
      return $http.post('/dashboard/createproject/' + project.projCompany, project).then(function(data) {
        console.log(project);
        serviceData.companies.push(project);
        console.log(data);

      });
    },

    getAllDetails: function(id, array) {

      console.log(id);
      // debugger;
      console.log(array);
      for(var i = 0; i<array.length; i++) {
        if(array[i]._id == id) {
          // debugger;
          console.log(array[i]);
          return array[i];
        }
      }

    },
    // addUserToDB: function(user) {
    //   console.log(user);
    //   return $http.post('/login').then(function(data) {
    //     console.log(user.login);
    //     // serviceData.companies.push(project);
    //     console.log(data);


    //   });
    // }
    removeProj: function(comp) {
      console.log(comp);
      return $http.delete('/dashboard/' + comp.projCompany +'/' + comp._id)
      .then(function(data) {
        console.log('remove from dash:' + comp);
        console.log(data);
        serviceData.getAllDash(data.config.projCompany);
      })
    }
  }


  return serviceData;


}]);
