(function(){
  angular
  .module('pms-app',['ngAnimate']);
  angular.module('pms-app').controller('mainController',['$scope',mainController]);
  function mainController($scope){
    var vm = $scope;
    vm.title = "PMS Website";
  }//end:mainController
}());//iife
