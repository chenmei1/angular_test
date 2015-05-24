/**
*	定义一个入口app.js，主要是定义主要module，有引入一些附带的模块，并定义路由
*/

//定义一个全局的module，并引入导入的angular的模块和我们自己写的模块(module name)
/*var bookStoreApp = angular.module('bookStoreApp',[
	'ngRoute','ngAnimate','bookStoreCtrls','bookStoreFilters','bookStoreServices','bookStoreDirective'
	]);*/

var bookStoreApp = angular.module('bookStoreApp',[
	'bookStoreCtrls','ngRoute'
	]);
//定义整个网站的路由系统
bookStoreApp.config(function($routeProvider){
	$routeProvider.when('/hello',{
		templateUrl:'tpls/hello.html',
		controller:'HelloCtrl'
	}).when('/list',{
		templateUrl:'tpls/bookList.html',
		controller:'BookListCtrl'
	}).otherwise({
		redirectTo:'/hello'
	})
});
