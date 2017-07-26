
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
app.controller('publicIndexCtrl',['$scope','$http',function($scope,$http){
  //定义index中显示内容的数据
  $scope.caseIndexList=[];
  //发起网络请求初始化一些数据
    $http
        .get('data/caseindex.json')
        .success(function(data){
           $scope.caseIndexList=data;
        });
  //点击庭审出席跳转到对应的法庭
  $scope.enterCourt=function($index){
    $scope.courtName=$scope.caseIndexList[$index].caseAddress;
    sessionStorage['courtName']=$scope.courtName;
    location.href='custom/court_attend.html';
  };

}]);
//创建public.index中模态框控制器（单模态框处理）
app.controller('modalCtrl',['$scope','$http',function ($scope,$http) {
    //请求排期数据
    $http
        .get('data/casedata.json')
        .success(function(data){
            $scope.caseDataList=data;
        });
}]);
//创建案件排期控制器
app.controller('caseDateCtrl',['$scope','$http','$stateParams','$httpParamSerializerJQLike',function($scope,$http,$stateParams,$httpParamSerializerJQLike){
    //表格数据
    $http
        .get('data/casedatadate.json')
        .success(function(data){
            $scope.caseDataDateList=data;
        });
    //查询列表
    $scope.checkoutList={
        caseNumber:'',
        caseCause:'',
        caseStartTime:'',
        casePersonal:'',
        caseAnswered:''
    };
    //点击查询时，拿到用户的输入
    $scope.submitCheckout=function () {
        //将用户查询输入序列化发送给后台
        var str=$httpParamSerializerJQLike($scope.checkoutList);
        console.log(str);
        
    };
    //新建案件，新建排期两个模态框的问题（多模态框处理）
    $scope.newBuildCase=function () {
        
    }

}]);
