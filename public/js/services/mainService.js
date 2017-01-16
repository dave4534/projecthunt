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
    getAllDash: function(comp){
      console.log(' getAllDash invoked from service');
      return $http.get('/dashboard/' + comp)
      .then(function(res){
        console.log("getalldash!!!");
        console.log(res.data);
        // debugger;
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
      return $http.post('/dashboard/' + project.projCompany, project).then(function(data) {
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

      }
      
    },

    getUserProjects: function() {


    }
  };

  return serviceData;


}]);
