'use strict';

(function() {
    var uploadController = function($scope, uploader) {
        $scope.isLoaded = false;
        $scope.processUpload = function(){
            uploader.fileData().then(function(data) {
                var nfqueue = JSON.parse(data);
                $scope.nfqueue = nfqueue.queue;
                console.log($scope.nfqueue);
                $scope.isLoaded = true;
            });
        }
    }

    angular.module('nq.controllers')
        .controller('uploadCtrl', ['$scope', 'uploader', uploadController]);
})();