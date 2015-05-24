var UserInfoModule = angular.module('UserInfoModule',[]);
UserInfoModule.controller('UserInforCtrl',['$scope',function($scope){
	$scope.userInfor={
		email:'912749558@qq.com',
		password:'912749558',
		autoLogin:true
	};
	$scope.getFormData= function(){
		console.log($scope.userInfor);
	};
	$scope.setFormData = function(){
		$scope.userInfor={
			email:'chenmei@qq.com',
			password:'918',
			autoLogin:false
		};
	};
	$scope.restForm = function(){
		$scope.userInfor={
			email:'912749558@qq.com',
			password:'912749558',
			autoLogin:true
		};
	};
}]);