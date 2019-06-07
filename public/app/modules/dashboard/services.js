'use strict';
 
angular.module('Dashboard')
 
.factory('DashboardService',
    ['$http', '$cookieStore', '$rootScope', '$timeout',
    function ($http, $cookieStore, $rootScope, $timeout) {
        var service = {};

        service.getMovies = function (dvdNull, dvdNotNull, titleNull, titleNotNull,  callback) {
            
            $http.post('http://localhost:3000/movies/', { dvdNull: dvdNull, dvdNotNull: dvdNotNull,
            titleNull: titleNull, titleNotNull: titleNotNull })
                .success(function (response) {
                    callback(response);
                });
        };

        service.getMovieByID = function (imdbid,  callback) {
            $http.post('http://localhost:3000/movies/'+imdbid, {  })
                .success(function (response) {
                    callback(response);
                });
        };

        service.getRatingsByID = function (imdbid,  callback) {
            $http.post('http://localhost:3000/ratings/'+imdbid, {  })
                .success(function (response) {
                    callback(response);
                });
        };
 
        return service;
    }]);