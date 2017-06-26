//创建模块
var app=angular.module('courtAttend',['ng','ui.router']);

//创建父控制器
app.controller('courtParent',['$scope',function($scope){
  $scope.exit='退出';
  $scope.courtName=sessionStorage['courtName'];
  $scope.goback=function(){
    sessionStorage['courtName']='';
    location.href='public_index.html';
  }
}]);