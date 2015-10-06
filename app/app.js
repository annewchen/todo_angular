var app = angular.module('ListApp', []);

app.controller('ListCtrl', ['$scope', function($scope){
  $scope.items= [
  /*{chore: "wash the dog", status: false},
  {chore: "mow the lawn", status: false},*/
  ];

  $scope.addChore = function(){
    $scope.items.push(
      {chore: $scope.newChore, status: false}
    );
    $scope.newChore=""
  };

}]);