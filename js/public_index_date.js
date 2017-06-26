//创建模块
var app=angular.module('procuratorate',['ng','ui.route']);

//配置状态
app.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider
			.state('login', {
				url: '/mylogin',
				templateUrl: 'custom/login.html'
			})
			.state('main', {
				url: '/mymain',
				templateUrl: 'custom/main.html'
			})
			.state('main.sidebar', {
				url: '/mymain.sidebar',
				templateUrl: 'custom/case/case_sidebar.html'
			})
			.state('main.index', {
				url: '/mymain.index',
				templateUrl: 'custom/case/case_index.html'
			})
			.state('main.play', {
				url: '/mymain.play',
				templateUrl: 'custom/case/case_play.html'
			})
			.state('main.look', {
				url: '/mymain.look',
				templateUrl: 'custom/case/case_look.html'
			}).state('main.date', {
				url: '/mymain.date',
				templateUrl: 'custom/case/case_date.html'
			})

	$urlRouterProvider.otherwise('/mylogin');
});


//定义路由
app.config(function($routeProvider){
	$routeProvider
			.when('/index',{
				templateUrl:'case/case_index.html',
				controller:'index'
			})
			.when('/date',{
				templateUrl:'case/case_date.html'
			})
			.when('/play',{
				templateUrl:'case/case_play.html'
			})
			.when('/look',{
				templateUrl:'case/case_look.html'
			})
			.when('/header',{
				templateUrl:'case/case_header.html'
			})
			.otherwise({redirectTo:'/index'})
});

//创建父控制器
app.controller('parent',['$scope','$location',function($scope,$location){
	//定义跳转方法jump
	$scope.jump=function(str){
		$location.path(str);
	};
	//定义左边栏显示内容数据
	$scope.showList = [
		{imgUrl:'index_2.png',text:'首页',jumpTip:'/index'},
			{imgUrl:'casebuild_1.png',text:'立案排期',jumpTip:'/date'},
		{imgUrl:'caseplay_1.png',text:'案件点播',jumpTip:'/play'},
		{imgUrl:'caselook_1.png',text:'统计查看',jumpTip:'/look'}
	];
}]);

//创建header控制器
app.controller('header',['$scope',function($scope){
	//定义header显示信息列表
	$scope.userList={time:'上午',userName:'developer',userImg:'developer.png'};
	//定义显示用户名还是退出
	$scope.isshow=true;
	if(sessionStorage['courtName']){
		$scope.isshow=false;
	}

}]);

//创建index控制器
app.controller('index',['$scope',function($scope){
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
		location.href='custom/case/court_attend.html';
	}
}]);