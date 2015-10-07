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
  $scope.deleteChore = function(item){
    var index = $scope.items.indexOf(item)
    $scope.items.splice(index, 1);
  };
  $scope.clear = function(){
    var oldItems = $scope.items;
    $scope.items = [];
    angular.forEach(oldItems, function(item){
        if (!item.status) $scope.items.push(item)
      });
    };
}]);