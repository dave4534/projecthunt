app.controller('projControl', ['$scope', 'mainService', '$state',  function($scope, mainService, $state){
// app.controller('projControl', function ($scope) {

  $scope.projects = [
    // {
    //   projTitle: $scope.name,
    //   projDescription: $scope.description,
    //   projDueDate: $scope.date,
    //   langTags:$scope.langTags,
    //   image_url: $scope.image_url
    // }
  ];
  $scope.tags = [];
  
  $scope.empDashPath = {
    name: $state.params.comp
  };

  $scope.addProject = function (e) {
    // console.log($state.params);
    console.log('add proj invoked!');
    if ($scope.name === '') { return; }

    var project = { 
      projCompany: $state.params.comp,
      projTitle: $scope.name,
      projDescription: $scope.description,
      projDueDate: $scope.date,
      langTags:$scope.langTags,
      image_url: $scope.image_url
    };
    console.log($scope.langTags);
    $scope.langTags.forEach(function(a) {
      $scope.tags.push(a.text);
      console.log(a);
    });
    console.log($scope.tags);
    project.langTags = $scope.tags;
     //console.log tags somehow
      console.log('here are the updated langTags');
      console.log(project);

    $scope.name = '';
    $scope.description = '';
    $scope.date = '';
    $scope.langTags = '';
    $scope.image_url = '';

    console.log(project);
    mainService.postToDash(project);
    mainService.getAllDash(project.projCompany);

    // $scope.projects.push(project);
        // mainService.postToDash(project).then(function() {
        //   mainService.getAllDash()
        // });

        // mainService.getAll().then(function(){
        //   console.log('controller getAll invoked');
        //   // $scope.companies = mainService.companies;
        //   console.log($scope.companies);
        // }).catch(function(err){
        //   console.log(err);
        // });
  
             
  };

  $scope.removeProject = function (comp) {
    // $scope.projects.splice(index, 1);
    console.log(comp);
    mainService.removeProj(comp);
  };

  // $scope.readmore = function(){
  //   $state.go('proj1');
  // };

   $scope.gohome = function(){
    $state.go('home');
  };



  
}]);

