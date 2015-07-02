'use strict';

(function() {
    var uploadController = function($scope, $q, uploader) {
        var deferred = $q.defer();

        $scope.isLoaded = false;
        $scope.processUpload = function(){
            uploader.fileData().then(function(data) {
                var nfqueue = JSON.parse(data);
                //$scope.nfqueue = nfqueue.queue;
                //console.log($scope.nfqueue);
                $scope.isLoaded = true;
                deferred.resolve(nfqueue.queue);
            });
        };

        $scope.getTableData = function() {
            return deferred.promise;
        };
    };

    angular.module('nq.controllers')
        .controller('uploadCtrl', ['$scope', '$q', 'uploader', uploadController]);
})();