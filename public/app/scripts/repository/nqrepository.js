(function() {
    var app = angular.module('nq.services');

    var nqrepo = function($resource, $location) {
        var host = $location.protocol() + '://' + $location.host() + ':' + $location.port();

        var nq = $resource(host + '/api/v1/nq/');

        function save(obj) {
            return nq.save(obj).$promise;
        }

        return {
            save: save
        };
    };

    app.factory('nqrepo', ['$resource', '$location', nqrepo]);
})();