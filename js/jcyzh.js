//创建模块
var app=angular.module('procuratorate',['ng','ui.router','ngAnimate', 'ui.bootstrap']);

//配置状态
app.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider
			.state('login', {
				url: '/mylogin',
				views:{
					'main':{
						templateUrl: 'custom/user_login.html'
					}
				}
			})
			.state('courtAttend',{
				url:'/mycourtAttend',
				templateUrl:'custom/court_attend.html'
			})
			.state('public', {
				url: '/mypublic',
				views:{
					'main':{
						templateUrl:'custom/public_index.html',
						controller: function($state){
							$state.go('public.index');//默认显示第一个tab
						}
					}
				}
			})
			.state('public.index', {
				url: '^/mypublicIndex',
				templateUrl: 'custom/case/case_index.html'
			})
			.state('public.play', {
				url: '^/mypublicPlay',
				templateUrl: 'custom/case/case_play.html'
			})
			.state('public.look', {
				url: '^/mypublicLook',
				templateUrl: 'custom/case/case_look.html'
			})
			.state('public.date', {
				url: '^/mypublicDate',
				templateUrl: 'custom/case/case_date.html',
			})
	$urlRouterProvider.otherwise('/mylogin');
});


//创建父控制器
app.controller('parent',['$scope','$state',function($scope,$state){
	//定义跳转方法jump
	$scope.jump = function (desState, params) {
		console.log(' jump func is called ');
		$state.go(desState, params);
	};
}]);
