(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.checkLunch = function () {
      if($scope.meals != "" && $scope.meals != undefined){
        var mealsArray = $scope.meals.split(',');
        var counter = 0;
       for (var i = 0; i < mealsArray.length; i++) {
          if(mealsArray[i].trim() != ""){
            counter++;
          }
        }
        if(counter <= 3){
          $scope.messageType = "success";
          $scope.message = "Enjoy!";
        }else{
          $scope.message = "Too much";
        }
      }else{
        $scope.messageType = "fail";
        $scope.message = "Please enter data first (Empty values are not counted)"
      }
    };
    
  }

})();