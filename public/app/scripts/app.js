'use strict';

// declare modules
angular.module('Authentication', []);
angular.module('Home', []);
angular.module('Dashboard', []);
angular.module('Detail', []);

angular.module('BasicHttpAuthExample', [
    'Authentication',
    'Home',
	'Dashboard',
	'Detail',
    'ngRoute',
    'ngCookies'
])
 
.config(['$routeProvider','$locationProvider', function ($routeProvider, $locationProvider) {

    $routeProvider
        .when('/login', {
            controller: 'LoginController',
            templateUrl: 'modules/authentication/views/login.html',
            hideMenus: true
        })

        .when('/dashboard', {
            controller: 'DashboardController',
            templateUrl: 'modules/dashboard/views/dashboard.html'
        })

        .when('/detailmovie', {
            controller: 'DetailController',
            templateUrl: 'modules/detailmovie/views/detailmovie.html',
            paramExample: 'imdbid'
        })
 
        .otherwise({ redirectTo: '/login' });
		
		 $locationProvider.html5Mode(false).hashPrefix('app');
}])
 
.run(['$rootScope', '$location', '$cookieStore', '$http',
    function ($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line			
        }
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in
            if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
                $location.path('/login');
            }
        });
    }]);
	