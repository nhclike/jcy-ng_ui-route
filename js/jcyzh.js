//创建模块
var app=angular.module('procuratorate',['ng','ui.router']);

//配置状态
app.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider
			.state('login', {
				url: '/mylogin',
				views:{
					'main':{
						templateUrl: 'custom/login.html'
					}
				}
			})
			.state('main', {
				url: '/mymain',
				views:{
					'main':{
						templateUrl:'custom/main.html',
						controller: function($state){
							$state.go('main.index');//默认显示第一个tab
						}
					}
				}
			})
			.state('main.sidebar', {
				url: '^/mymainSidebar',
				templateUrl: 'custom/case/case_sidebar.html',
				controller:'mainSidebarCtrl'
			})
			.state('main.index', {
				url: '^/mymainIndex',
				templateUrl: 'custom/case/case_index.html'
			})
			.state('main.play', {
				url: '^/mymainPlay',
				templateUrl: 'custom/case/case_play.html'
			})
			.state('main.look', {
				url: '^/mymainLook',
				templateUrl: 'custom/case/case_look.html'
			})
			.state('main.date', {
				url: '^/mymainDate',
				templateUrl: 'custom/case/case_date.html'
			})
			.state('caseHeader',{
				url:'^/mymainHeader',
				templateUrl:'custom/case/case_header.html',
				controller:'caseHeaderCtrl'
			});

	$urlRouterProvider.otherwise('/mylogin');
});




//创建父控制器
app.controller('parent',['$scope','$state',function($scope,$state){
	//定义跳转方法jump
	$scope.jump = function (desState, params) {
		console.log(' jump func is called ');
		$state.go(desState, params);
	};
	$scope.test='this is a test';

}]);

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
//创建main.sidebar控制器
app.controller('mainSidebarCtrl',['$scope',function($scope){
	//定义左边栏显示内容数据
	$scope.showList = [
		{imgUrl:'index_2.png',text:'首页',jumpTip:'main.index'},
		{imgUrl:'casebuild_1.png',text:'立案排期',jumpTip:'main.date'},
		{imgUrl:'caseplay_1.png',text:'案件点播',jumpTip:'main.play'},
		{imgUrl:'caselook_1.png',text:'统计查看',jumpTip:'main.look'}
	];
}]);

//创建index控制器
app.controller('mainIndexCtrl',['$scope',function($scope){
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
		location.href='court_attend.html';
	}
}]);