(function() {
    var app = angular.module('nq', ['ngRoute',
        'nq.controllers',
        'nq.services']);

    app.config(function($routeProvider, $locationProvider){
        $routeProvider
            .when("/main", {
                templateUrl: "app/views/main.html",
                controller: "mainCtrl"
            })
            .when("/upload", {
                templateUrl: "app/views/upload.html",
                controller: "uploadCtrl"
            })
            .otherwise({redirectTo:"/main"});
            $locationProvider.html5Mode(false);
    });
    angular.module('nq.controllers', []);
    angular.module('nq.services', []);
})();