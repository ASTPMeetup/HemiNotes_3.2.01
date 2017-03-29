var mainApplicationModuleName = "mean";

var app = angular.module("main", []);

// Bind a function to the document ready event and use bootstrap to start
// a new AngularJS app using the main module
app.controller("repoCtrl", function($scope, $http) {

  $http.get("/students")
    .then(function success(res){
      console.log(res.data);
      $scope.student = res.data[0];
    },
    function success(res){
      console.log(res);
    });
});
