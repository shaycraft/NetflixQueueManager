(function() {
    var app = angular.module('nq', ['ngRoute',
        'nq.controllers',
        'nq.services']);

    app.config(function($routeProvider){
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
    });
    angular.module('nq.controllers', []);
    angular.module('nq.services', []);
})();