var subrefApp = angular.module('subrefApp',['ngSanitize']);

//subrefApp.config(function ($routeProvider) {
//    $routeProvider
//        // main route
//        //
//        .when('/',
//        {
//            controller: 'portfolioCtrl',
//            templateUrl: 'index.html'
//
//        })
//
//        // theaters list page
//        //
//        .when('/apps',
//        {
//            controller: 'portfolioCtrl',
//            templateUrl: 'inadex.html'
//
//        })
//
//        // if non of the above routes
//        // are matched we are setting router
//        // to redirect to the RootController
//        .otherwise({ redirectTo: '/'});
//});


subrefApp.controller('portfolioCtrl', ["$scope", "$http", "$sce", function($scope, $http, $sce) {
	$http.get('/js/data.js').success(function(data) {
		$scope.portfolios = data;
		$scope.portfolios.content = $sce.trustAsHtml($scope.portfolios.content);
	});
}]);
