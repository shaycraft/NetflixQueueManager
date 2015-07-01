(function() {
    var app = angular.module('nq.services');

    var uploader = function($q) {
        var fileData = function() {

            var deferred = $q.defer();
            var f = document.getElementById('file').files[0],
                r = new FileReader();
            r.onloadend = function(e){
                var data = e.target.result;
                //send you binary data via $http or $resource or do anything else with it
                //console.log(data);
                deferred.resolve(data);
            };
            r.readAsBinaryString(f);

            return deferred.promise;
        };

        return {
            fileData: fileData
        }
    }

    app.factory('uploader', ['$q', uploader]);
})();