'use strict';
 
angular.module('Detail')

.controller('DetailController',  ['$scope', '$rootScope', '$location', '$window', 'DetailService',
function ($scope, $rootScope, $location, $window, DetailService) {

	$scope.detail = DetailService.getDetail();
	$scope.ratings = DetailService.getRatings();

	//$scope.seen = $scope.detail.SEEN == 1;

	window.scrollTo(0, 0);

	$scope.back = function(){
		$window.history.back();
	};

	$scope.updateSeen = function(){
		var seen = $scope.seen;
		var imdbid = $scope.detail.IMDBID;
		if(seen){
			DetailService.updateSeenMovie(imdbid, function(response) {
				alert("Aggiornato - VISTO");
			});
		}else{
			DetailService.updateNotSeenMovie(imdbid, function(response) {
				alert("Aggiornato - NON VISTO");
			});
		}
	};
}]);