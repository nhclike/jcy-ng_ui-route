
//创建caseHeader控制器
app.controller('caseHeaderCtrl',['$scope',function($scope){
  //定义header显示信息列表
  $scope.userList={time:'上午',userName:'developer',userImg:'developer.png'};
  //定义显示用户名还是退出
  $scope.isshow=true;
  if(sessionStorage['courtName']){
    $scope.isshow=false;
  }
}]);
//创建public.sidebar控制器
app.controller('publicSidebarCtrl',['$scope',function($scope){
  //定义左边栏显示内容数据
  $scope.showList = [
    {imgUrl:'index_2.png',text:'首页',jumpTip:'public.index'},
    {imgUrl:'casebuild_1.png',text:'立案排期',jumpTip:'public.date'},
    {imgUrl:'caseplay_1.png',text:'案件点播',jumpTip:'public.play'},
    {imgUrl:'caselook_1.png',text:'统计查看',jumpTip:'public.look'}
  ];
}]);

//创建public.index控制器
app.controller('publicIndexCtrl',['$scope',function($scope){
  //定义index中显示内容的数据
  $scope.caseIndexList=[
    {
      caseNumber:'某某案号1',
      caseAddress:'某法院某法庭1',
      caseTime:'2017-4-4 10:20:21'
    },
    {
      caseNumber:'某某案号2',
      caseAddress:'某法院某法庭2',
      caseTime:'2017-4-4 10:20:21'
    },
    {
      caseNumber:'某某案号3',
      caseAddress:'某法院某法庭3',
      caseTime:'2017-4-4 10:20:21'
    },
    {
      caseNumber:'某某案号4',
      caseAddress:'某法院某法庭4',
      caseTime:'2017-4-4 10:20:21'
    },{
      caseNumber:'某某案号5',
      caseAddress:'某法院某法庭5',
      caseTime:'2017-4-4 10:20:21'
    }
  ];
  //点击庭审出席跳转到对应的法庭
  $scope.enterCourt=function($index){
    console.log($index);
    $scope.courtName=$scope.caseIndexList[$index].caseAddress;
    sessionStorage['courtName']=$scope.courtName;
    location.href='custom/court_attend.html';
  }
}]);