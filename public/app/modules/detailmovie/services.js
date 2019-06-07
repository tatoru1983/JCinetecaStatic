'use strict';
 
angular.module('Detail')
 
.factory('DetailService',
    ['$http', '$cookieStore', '$rootScope', '$timeout',
    function ($http, $cookieStore, $rootScope, $timeout) {
        var service = {};

        var detail;
        var ratings;

        service.setDetail = function (detailInput) {
            //detail = detailInput[0];
			detail = detailInput;
        }

        service.getDetail = function(){
            return detail;
        };

        service.setRatings = function (ratingsInput) {
            ratings = ratingsInput;
        }

        service.getRatings = function(){
            return ratings;
        };

        service.updateSeenMovie = function (imdbid,  callback) {
            $http.put('http://localhost:3000/movies/'+imdbid, {  })
                .success(function (response) {
                    callback(response);
                });
        };

        service.updateNotSeenMovie = function (imdbid,  callback) {
            $http.put('http://localhost:3000/movies/'+imdbid, {  })
                .success(function (response) {
                    callback(response);
                });
        };

        return service;
    }]);