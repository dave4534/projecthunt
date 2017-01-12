// var app = angular.module('projectForm', []);

app.controller('projControl', function ($scope) {
  $scope.projects = [
    {
      name: $scope.name,
      description: $scope.description,
      date: $scope.date,
      image_url: $scope.image_url
    }
  ];

  $scope.addProject = function (e) {
    if ($scope.name === '') { return; }

    var project = { 
      name: $scope.name,
      description: $scope.description,
      date: $scope.date,
      image_url: $scope.image_url
    };

    $scope.name = '';
    $scope.description = '';
    $scope.date = '';
    $scope.image_url = '';

    $scope.projects.push(project);
  };

  $scope.removeProject = function (index) {
    $scope.projects.splice(index, 1);
  };
});

// document.getElementById("files").onchange = function () {
//     var reader = new FileReader();

//     reader.onload = function (e) {
//         // get loaded data and render thumbnail.
//         document.getElementById("image").src = e.target.result;
//     };

//     // read the image file as a data URL.
//     reader.readAsDataURL(this.files[0]);
// };
