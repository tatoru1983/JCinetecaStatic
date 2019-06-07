'use strict';
 
angular.module('Authentication')
 
.controller('LoginController', ['$scope', '$rootScope', '$location', '$http', 'AuthenticationService',
    function ($scope, $rootScope, $location, $http, AuthenticationService) {
        // reset login status
        AuthenticationService.ClearCredentials();
		$scope.users= [];

		$http.get("../../json/users.JSON").then(function(response){
			$scope.users = response.data;
		});
 
        $scope.login = function () {
            $scope.dataLoading = true;
			var check = false;
			for(var i=0; i<$scope.users.length;i++){
				if($scope.users[i].username==$scope.username && $scope.users[i].password==$scope.password)
					check = true;
			}
			if(check){
				AuthenticationService.SetCredentials($scope.username, $scope.password);
                $location.path('/dashboard');
			}else{
				$scope.error = response.message;
                $scope.dataLoading = false;
			}
            /*AuthenticationService.Login($scope.username, $scope.password, function(response) {
                if(response.success) {
                    AuthenticationService.SetCredentials($scope.username, $scope.password);
                    $location.path('/dashboard');
                } else {
                    $scope.error = response.message;
                    $scope.dataLoading = false;
                }
            });*/
        };
    }]);