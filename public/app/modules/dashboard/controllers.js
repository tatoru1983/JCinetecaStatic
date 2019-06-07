'use strict';
 
angular.module('Dashboard')

.controller('DashboardController',  ['$scope', '$rootScope', '$location', '$http', '$cookieStore', 'DashboardService', 'DetailService',
function ($scope, $rootScope, $location, $http, $cookieStore, DashboardService, DetailService) {
	
	$scope.data= [];
	$scope.aforisma = {};
	$scope.allmovies = {};

	$http.get("../../json/aforismi.JSON").then(function(response){
		var indexAforismaRandom = Math.floor(Math.random() * response.data.length);
		$scope.aforisma = response.data[indexAforismaRandom];
	});

	$http.get("../../json/movies.json").then(function(response){
		$scope.allmovies = response.data;
	});


	$scope.search = function(){
		if($scope.titleFilter == undefined && $scope.dvdFilter == undefined){
			alert('Valorizzare Titolo o DVD');
			return;
		}
		$scope.data = [];
		
		/*var titleNotNull = $scope.titleFilter == undefined ? '' : '%'+$scope.titleFilter.toUpperCase()+'%';
		var dvdNotNull = $scope.dvdFilter == undefined ? '0' : $scope.dvdFilter;
		var titleNull = $scope.titleFilter == undefined ? 'NULL' : '\''+$scope.titleFilter.toUpperCase()+'\'';
		var dvdNull = $scope.dvdFilter == undefined ? 'NULL' : $scope.dvdFilter;*/

		$rootScope.globals = $cookieStore.get('globals') || {};
		if($rootScope.globals.currentUser.mock){
			$scope.data = [{"TITLE_ITA":"Jackie Brown","TITLE":"Jackie Brown","YEAR":"1997","RATED":"R","Released":"25 Dec 1997","RUNTIME":"154 min","GENRE":"Crime, Drama, Thriller","DIRECTOR":"Quentin Tarantino","WRITER":"Quentin Tarantino (written for the screen by), Elmore Leonard (novel)","ACTORS":"Pam Grier, Samuel L. Jackson, Robert Forster, Bridget Fonda","PLOT":"A middle-aged woman finds herself in the middle of a huge conflict that will either make her a profit or cost her life.","Language":"English","COUNTRY":"USA","AWARDS":"Nominated for 1 Oscar. Another 8 wins & 21 nominations.","POSTER":"https://ia.media-imdb.com/images/M/MV5BNmY5ODRmYTItNWU0Ni00MWE3LTgyYzUtYjZlN2Q5YTcyM2NmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg","SEEN":"TRUE","METASCORE":"64","IMDBRATING":"7.5","IMDBVOTES":"266,498","IMDBID":"tt0119396","TYPE":"movie","DVD":"05 Aug 1998","BOXOFFICE":"N/A","PRODUCTION":"Miramax Films","WEBSITE":"N/A","RESPONSE":"True"}
			,
			{"TITLE_ITA":"Le iene","TITLE":"Reservoir Dogs","YEAR":"1992","RATED":"R","Released":"02 Sep 1992","RUNTIME":"99 min","GENRE":"Crime, Drama, Thriller","DIRECTOR":"Quentin Tarantino","WRITER":"Quentin Tarantino, Quentin Tarantino (background radio dialogue written by), Roger Avary (background radio dialogue written by)","ACTORS":"Harvey Keitel, Tim Roth, Michael Madsen, Chris Penn","PLOT":"After a simple jewelry heist goes terribly wrong, the surviving criminals begin to suspect that one of them is a police informant.","Language":"English","COUNTRY":"USA","AWARDS":"12 wins & 22 nominations.","POSTER":"https://ia.media-imdb.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg","SEEN":"TRUE","METASCORE":"79","IMDBRATING":"8.3","IMDBVOTES":"770,000","IMDBID":"tt0105236","TyTYPEpe":"movie","DVD":"05 Nov 2002","BOXOFFICE":"N/A","PRODUCTION":"Miramax Films","WEBSITE":"N/A","RESPONSE":"True"}
			,
			{"TITLE_ITA":"Pulp Fiction","TITLE":"Pulp Fiction","YEAR":"1994","RATED":"R","Released":"14 Oct 1994","RUNTIME":"154 min","GENRE":"Crime, Drama","DIRECTOR":"Quentin Tarantino","WRITER":"Quentin Tarantino (stories), Roger Avary (stories), Quentin Tarantino","ACTORS":"Tim Roth, Amanda Plummer, Laura Lovelace, John Travolta","PLOT":"The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.","Language":"English, Spanish, French","COUNTRY":"USA","AWARDS":"Won 1 Oscar. Another 62 wins & 69 nominations.","POSTER":"https://ia.media-imdb.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_SX300.jpg","SEEN":"TRUE","METASCORE":"94","IMDBRATING":"8.9","IMDBVOTES":"1,514,292","IMDBID":"tt0110912","TYPE":"movie","DVD":"19 May 1998","BOXOFFICE":"N/A","PRODUCTION":"Miramax Films","WEBSITE":"N/A","RESPONSE":"True"}
			,
			{"TITLE_ITA":"Jackie Brown","TITLE":"Jackie Brown","YEAR":"1997","RATED":"R","Released":"25 Dec 1997","RUNTIME":"154 min","GENRE":"Crime, Drama, Thriller","DIRECTOR":"Quentin Tarantino","WRITER":"Quentin Tarantino (written for the screen by), Elmore Leonard (novel)","ACTORS":"Pam Grier, Samuel L. Jackson, Robert Forster, Bridget Fonda","PLOT":"A middle-aged woman finds herself in the middle of a huge conflict that will either make her a profit or cost her life.","Language":"English","COUNTRY":"USA","AWARDS":"Nominated for 1 Oscar. Another 8 wins & 21 nominations.","POSTER":"https://ia.media-imdb.com/images/M/MV5BNmY5ODRmYTItNWU0Ni00MWE3LTgyYzUtYjZlN2Q5YTcyM2NmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg","SEEN":"TRUE","METASCORE":"64","IMDBRATING":"7.5","IMDBVOTES":"266,498","IMDBID":"tt0119396","TYPE":"movie","DVD":"05 Aug 1998","BOXOFFICE":"N/A","PRODUCTION":"Miramax Films","WEBSITE":"N/A","RESPONSE":"True"}
			,
			{"TITLE_ITA":"Le iene","TITLE":"Reservoir Dogs","YEAR":"1992","RATED":"R","Released":"02 Sep 1992","RUNTIME":"99 min","GENRE":"Crime, Drama, Thriller","DIRECTOR":"Quentin Tarantino","WRITER":"Quentin Tarantino, Quentin Tarantino (background radio dialogue written by), Roger Avary (background radio dialogue written by)","ACTORS":"Harvey Keitel, Tim Roth, Michael Madsen, Chris Penn","PLOT":"After a simple jewelry heist goes terribly wrong, the surviving criminals begin to suspect that one of them is a police informant.","Language":"English","COUNTRY":"USA","AWARDS":"12 wins & 22 nominations.","POSTER":"https://ia.media-imdb.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg","SEEN":"TRUE","METASCORE":"79","IMDBRATING":"8.3","IMDBVOTES":"770,000","IMDBID":"tt0105236","TyTYPEpe":"movie","DVD":"05 Nov 2002","BOXOFFICE":"N/A","PRODUCTION":"Miramax Films","WEBSITE":"N/A","RESPONSE":"True"}
			,
			{"TITLE_ITA":"Pulp Fiction","TITLE":"Pulp Fiction","YEAR":"1994","RATED":"R","Released":"14 Oct 1994","RUNTIME":"154 min","GENRE":"Crime, Drama","DIRECTOR":"Quentin Tarantino","WRITER":"Quentin Tarantino (stories), Roger Avary (stories), Quentin Tarantino","ACTORS":"Tim Roth, Amanda Plummer, Laura Lovelace, John Travolta","PLOT":"The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.","Language":"English, Spanish, French","COUNTRY":"USA","AWARDS":"Won 1 Oscar. Another 62 wins & 69 nominations.","POSTER":"https://ia.media-imdb.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_SX300.jpg","SEEN":"TRUE","METASCORE":"94","IMDBRATING":"8.9","IMDBVOTES":"1,514,292","IMDBID":"tt0110912","TYPE":"movie","DVD":"19 May 1998","BOXOFFICE":"N/A","PRODUCTION":"Miramax Films","WEBSITE":"N/A","RESPONSE":"True"}
			,
			{"TITLE_ITA":"Jackie Brown","TITLE":"Jackie Brown","YEAR":"1997","RATED":"R","Released":"25 Dec 1997","RUNTIME":"154 min","GENRE":"Crime, Drama, Thriller","DIRECTOR":"Quentin Tarantino","WRITER":"Quentin Tarantino (written for the screen by), Elmore Leonard (novel)","ACTORS":"Pam Grier, Samuel L. Jackson, Robert Forster, Bridget Fonda","PLOT":"A middle-aged woman finds herself in the middle of a huge conflict that will either make her a profit or cost her life.","Language":"English","COUNTRY":"USA","AWARDS":"Nominated for 1 Oscar. Another 8 wins & 21 nominations.","POSTER":"https://ia.media-imdb.com/images/M/MV5BNmY5ODRmYTItNWU0Ni00MWE3LTgyYzUtYjZlN2Q5YTcyM2NmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg","SEEN":"TRUE","METASCORE":"64","IMDBRATING":"7.5","IMDBVOTES":"266,498","IMDBID":"tt0119396","TYPE":"movie","DVD":"05 Aug 1998","BOXOFFICE":"N/A","PRODUCTION":"Miramax Films","WEBSITE":"N/A","RESPONSE":"True"}
			,
			{"TITLE_ITA":"Le iene","TITLE":"Reservoir Dogs","YEAR":"1992","RATED":"R","Released":"02 Sep 1992","RUNTIME":"99 min","GENRE":"Crime, Drama, Thriller","DIRECTOR":"Quentin Tarantino","WRITER":"Quentin Tarantino, Quentin Tarantino (background radio dialogue written by), Roger Avary (background radio dialogue written by)","ACTORS":"Harvey Keitel, Tim Roth, Michael Madsen, Chris Penn","PLOT":"After a simple jewelry heist goes terribly wrong, the surviving criminals begin to suspect that one of them is a police informant.","Language":"English","COUNTRY":"USA","AWARDS":"12 wins & 22 nominations.","POSTER":"https://ia.media-imdb.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg","SEEN":"TRUE","METASCORE":"79","IMDBRATING":"8.3","IMDBVOTES":"770,000","IMDBID":"tt0105236","TyTYPEpe":"movie","DVD":"05 Nov 2002","BOXOFFICE":"N/A","PRODUCTION":"Miramax Films","WEBSITE":"N/A","RESPONSE":"True"}
			,
			{"TITLE_ITA":"Pulp Fiction","TITLE":"Pulp Fiction","YEAR":"1994","RATED":"R","Released":"14 Oct 1994","RUNTIME":"154 min","GENRE":"Crime, Drama","DIRECTOR":"Quentin Tarantino","WRITER":"Quentin Tarantino (stories), Roger Avary (stories), Quentin Tarantino","ACTORS":"Tim Roth, Amanda Plummer, Laura Lovelace, John Travolta","PLOT":"The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.","Language":"English, Spanish, French","COUNTRY":"USA","AWARDS":"Won 1 Oscar. Another 62 wins & 69 nominations.","POSTER":"https://ia.media-imdb.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_SX300.jpg","SEEN":"TRUE","METASCORE":"94","IMDBRATING":"8.9","IMDBVOTES":"1,514,292","IMDBID":"tt0110912","TYPE":"movie","DVD":"19 May 1998","BOXOFFICE":"N/A","PRODUCTION":"Miramax Films","WEBSITE":"N/A","RESPONSE":"True"}
			,
			{"TITLE_ITA":"Jackie Brown","TITLE":"Jackie Brown","YEAR":"1997","RATED":"R","Released":"25 Dec 1997","RUNTIME":"154 min","GENRE":"Crime, Drama, Thriller","DIRECTOR":"Quentin Tarantino","WRITER":"Quentin Tarantino (written for the screen by), Elmore Leonard (novel)","ACTORS":"Pam Grier, Samuel L. Jackson, Robert Forster, Bridget Fonda","PLOT":"A middle-aged woman finds herself in the middle of a huge conflict that will either make her a profit or cost her life.","Language":"English","COUNTRY":"USA","AWARDS":"Nominated for 1 Oscar. Another 8 wins & 21 nominations.","POSTER":"https://ia.media-imdb.com/images/M/MV5BNmY5ODRmYTItNWU0Ni00MWE3LTgyYzUtYjZlN2Q5YTcyM2NmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg","SEEN":"TRUE","METASCORE":"64","IMDBRATING":"7.5","IMDBVOTES":"266,498","IMDBID":"tt0119396","TYPE":"movie","DVD":"05 Aug 1998","BOXOFFICE":"N/A","PRODUCTION":"Miramax Films","WEBSITE":"N/A","RESPONSE":"True"}
			,
			{"TITLE_ITA":"Le iene","TITLE":"Reservoir Dogs","YEAR":"1992","RATED":"R","Released":"02 Sep 1992","RUNTIME":"99 min","GENRE":"Crime, Drama, Thriller","DIRECTOR":"Quentin Tarantino","WRITER":"Quentin Tarantino, Quentin Tarantino (background radio dialogue written by), Roger Avary (background radio dialogue written by)","ACTORS":"Harvey Keitel, Tim Roth, Michael Madsen, Chris Penn","PLOT":"After a simple jewelry heist goes terribly wrong, the surviving criminals begin to suspect that one of them is a police informant.","Language":"English","COUNTRY":"USA","AWARDS":"12 wins & 22 nominations.","POSTER":"https://ia.media-imdb.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg","SEEN":"TRUE","METASCORE":"79","IMDBRATING":"8.3","IMDBVOTES":"770,000","IMDBID":"tt0105236","TyTYPEpe":"movie","DVD":"05 Nov 2002","BOXOFFICE":"N/A","PRODUCTION":"Miramax Films","WEBSITE":"N/A","RESPONSE":"True"}
			,
			{"TITLE_ITA":"Pulp Fiction","TITLE":"Pulp Fiction","YEAR":"1994","RATED":"R","Released":"14 Oct 1994","RUNTIME":"154 min","GENRE":"Crime, Drama","DIRECTOR":"Quentin Tarantino","WRITER":"Quentin Tarantino (stories), Roger Avary (stories), Quentin Tarantino","ACTORS":"Tim Roth, Amanda Plummer, Laura Lovelace, John Travolta","PLOT":"The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.","Language":"English, Spanish, French","COUNTRY":"USA","AWARDS":"Won 1 Oscar. Another 62 wins & 69 nominations.","POSTER":"https://ia.media-imdb.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_SX300.jpg","SEEN":"TRUE","METASCORE":"94","IMDBRATING":"8.9","IMDBVOTES":"1,514,292","IMDBID":"tt0110912","TYPE":"movie","DVD":"19 May 1998","BOXOFFICE":"N/A","PRODUCTION":"Miramax Films","WEBSITE":"N/A","RESPONSE":"True"}
			,
			{"TITLE_ITA":"Jackie Brown","TITLE":"Jackie Brown","YEAR":"1997","RATED":"R","Released":"25 Dec 1997","RUNTIME":"154 min","GENRE":"Crime, Drama, Thriller","DIRECTOR":"Quentin Tarantino","WRITER":"Quentin Tarantino (written for the screen by), Elmore Leonard (novel)","ACTORS":"Pam Grier, Samuel L. Jackson, Robert Forster, Bridget Fonda","PLOT":"A middle-aged woman finds herself in the middle of a huge conflict that will either make her a profit or cost her life.","Language":"English","COUNTRY":"USA","AWARDS":"Nominated for 1 Oscar. Another 8 wins & 21 nominations.","POSTER":"https://ia.media-imdb.com/images/M/MV5BNmY5ODRmYTItNWU0Ni00MWE3LTgyYzUtYjZlN2Q5YTcyM2NmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg","SEEN":"TRUE","METASCORE":"64","IMDBRATING":"7.5","IMDBVOTES":"266,498","IMDBID":"tt0119396","TYPE":"movie","DVD":"05 Aug 1998","BOXOFFICE":"N/A","PRODUCTION":"Miramax Films","WEBSITE":"N/A","RESPONSE":"True"}
			,
			{"TITLE_ITA":"Le iene","TITLE":"Reservoir Dogs","YEAR":"1992","RATED":"R","Released":"02 Sep 1992","RUNTIME":"99 min","GENRE":"Crime, Drama, Thriller","DIRECTOR":"Quentin Tarantino","WRITER":"Quentin Tarantino, Quentin Tarantino (background radio dialogue written by), Roger Avary (background radio dialogue written by)","ACTORS":"Harvey Keitel, Tim Roth, Michael Madsen, Chris Penn","PLOT":"After a simple jewelry heist goes terribly wrong, the surviving criminals begin to suspect that one of them is a police informant.","Language":"English","COUNTRY":"USA","AWARDS":"12 wins & 22 nominations.","POSTER":"https://ia.media-imdb.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg","SEEN":"TRUE","METASCORE":"79","IMDBRATING":"8.3","IMDBVOTES":"770,000","IMDBID":"tt0105236","TyTYPEpe":"movie","DVD":"05 Nov 2002","BOXOFFICE":"N/A","PRODUCTION":"Miramax Films","WEBSITE":"N/A","RESPONSE":"True"}
			,
			{"TITLE_ITA":"Pulp Fiction","TITLE":"Pulp Fiction","YEAR":"1994","RATED":"R","Released":"14 Oct 1994","RUNTIME":"154 min","GENRE":"Crime, Drama","DIRECTOR":"Quentin Tarantino","WRITER":"Quentin Tarantino (stories), Roger Avary (stories), Quentin Tarantino","ACTORS":"Tim Roth, Amanda Plummer, Laura Lovelace, John Travolta","PLOT":"The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.","Language":"English, Spanish, French","COUNTRY":"USA","AWARDS":"Won 1 Oscar. Another 62 wins & 69 nominations.","POSTER":"https://ia.media-imdb.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_SX300.jpg","SEEN":"TRUE","METASCORE":"94","IMDBRATING":"8.9","IMDBVOTES":"1,514,292","IMDBID":"tt0110912","TYPE":"movie","DVD":"19 May 1998","BOXOFFICE":"N/A","PRODUCTION":"Miramax Films","WEBSITE":"N/A","RESPONSE":"True"}
			];
			//pagination
			$scope.viewby = 10;
			$scope.totalItems = $scope.data.length;
			$scope.currentPage = 1;
			$scope.itemsPerPage = $scope.viewby;
			$scope.maxSize = 5; //Number of pager buttons to show
		}else{
			/*DashboardService.getMovies(dvdNull, dvdNotNull, titleNull, titleNotNull, function(response) {
				$scope.data = response;
				//pagination
				$scope.viewby = 10;
				$scope.totalItems = $scope.data.length;
				$scope.currentPage = 1;
				$scope.itemsPerPage = $scope.viewby;
				$scope.maxSize = 5; //Number of pager buttons to show
			});*/
			for(var i=0; i<$scope.allmovies.length; i++){
				var dvd = $scope.allmovies[i];
				//cerco per numero DVD e titolo
				if($scope.dvdFilter != undefined && $scope.titleFilter != undefined){
					var titleFilterSplit = $scope.titleFilter.toUpperCase().split(" ");
					var trovatoTitle = true;
					var trovatoTitleIta = true;
					for(var j=0; j<titleFilterSplit.length; j++){
						if(!dvd.TITLE.toUpperCase().includes(titleFilterSplit[j])){
							trovatoTitle = false;
						}
						if(!dvd.TITLE_ITA.toUpperCase().includes(titleFilterSplit[j])){
							trovatoTitleIta = false;
						}
					}
					if(dvd.DVD == $scope.dvdFilter && (trovatoTitle || trovatoTitleIta)){
						$scope.data.push(dvd);
					}
				}
				//cerco per numero DVD
				if($scope.dvdFilter != undefined){
					if(dvd.DVD == $scope.dvdFilter){
						$scope.data.push(dvd);
					}
				}
				//cerco per titolo
				if($scope.titleFilter != undefined){
					var titleFilterSplit = $scope.titleFilter.toUpperCase().split(" ");
					var trovatoTitle = true;
					var trovatoTitleIta = true;
					for(var j=0; j<titleFilterSplit.length; j++){
						if(!dvd.TITLE.toUpperCase().includes(titleFilterSplit[j])){
							trovatoTitle = false;
						}
						if(!dvd.TITLE_ITA.toUpperCase().includes(titleFilterSplit[j])){
							trovatoTitleIta = false;
						}
					}
					if(trovatoTitle || trovatoTitleIta){
						$scope.data.push(dvd);
					}
				}
			}
		}
	};

	$scope.detail = function (imdbid) {
		//var imdbid = $scope.data[0].IMDBID;

		$rootScope.globals = $cookieStore.get('globals') || {};
		if($rootScope.globals.currentUser.mock){
			var responseDetail = [{"TITLE_ITA":"Le iene","TITLE":"Reservoir Dogs","YEAR":"1992","RATED":"R","Released":"02 Sep 1992","RUNTIME":"99 min","GENRE":"Crime, Drama, Thriller","DIRECTOR":"Quentin Tarantino","WRITER":"Quentin Tarantino, Quentin Tarantino (background radio dialogue written by), Roger Avary (background radio dialogue written by)","ACTORS":"Harvey Keitel, Tim Roth, Michael Madsen, Chris Penn","PLOT":"After a simple jewelry heist goes terribly wrong, the surviving criminals begin to suspect that one of them is a police informant.","Language":"English","COUNTRY":"USA","AWARDS":"12 wins & 22 nominations.","POSTER":"https://ia.media-imdb.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg","SEEN":"TRUE","METASCORE":"79","IMDBRATING":"8.3","IMDBVOTES":"770,000","IMDBID":"tt0105236","TyTYPEpe":"movie","DVD":"05 Nov 2002","BOXOFFICE":"N/A","PRODUCTION":"Miramax Films","WEBSITE":"N/A","RESPONSE":"True"}];
			DetailService.setDetail(responseDetail);
			$location.path('/detailmovie');
		}else{
			/*DashboardService.getMovieByID(imdbid, function(response) {
				DetailService.setDetail(response);
				DashboardService.getRatingsByID(imdbid, function(response) {
					DetailService.setRatings(response);
					$location.path('/detailmovie');
				});
			});*/
			var j = 0;
			for(var i=0; i<$scope.data.length; i++){
				if($scope.data[i].IMDBID == imdbid){
					j = i;
				}
				DetailService.setDetail($scope.data[j]);
				DetailService.setRatings($scope.data[j].RATINGS);
				$location.path('/detailmovie');
			}
		}
	};

	//pagination
	$scope.viewby = 10;
	$scope.totalItems = $scope.data.length;
	$scope.currentPage = 1;
	$scope.itemsPerPage = $scope.viewby;
	$scope.maxSize = 5; //Number of pager buttons to show

	$scope.pageChanged = function() {
		console.log('Page changed to: ' + $scope.currentPage);
	  };
}]);