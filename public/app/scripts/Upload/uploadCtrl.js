'use strict';

(function() {
    var uploadController = function($scope, $q, uploader, nqrepo) {
        var deferred = $q.defer();

        $scope.isLoaded = false;
        $scope.processUpload = function(){
            uploader.fileData().then(function(data) {
                var nfqueue = JSON.parse(data);
                $scope.isLoaded = true;
                $scope.queue = nfqueue.queue;
                deferred.resolve(nfqueue.queue);
            });
        };

        $scope.getTableData = function() {
            return deferred.promise;
        };

        $scope.saveToDb = function() {
            //console.log($scope.queue);
            nqrepo.save($scope.queue).then(function(data) {
                console.log(data);
                alert('Success!');
            });
        }
    };

    angular.module('nq.controllers')
        .controller('uploadCtrl', ['$scope', '$q', 'uploader', 'nqrepo', uploadController]);
})();