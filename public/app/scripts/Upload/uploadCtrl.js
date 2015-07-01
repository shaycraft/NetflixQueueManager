'use strict';

(function() {
    var uploadController = function($scope) {
        $scope.processUpload = function(){
            var f = document.getElementById('file').files[0],
                r = new FileReader();
            r.onloadend = function(e){
                var data = e.target.result;
                //send you binary data via $http or $resource or do anything else with it
                console.log(data);
                $scope.filecontents = data;
                $scope.$apply();
            };
            $scope.filecontents = "File contents about to be set";
            r.readAsBinaryString(f);
            console.log(r);
        }
    }

    angular.module('nq.controllers')
        .controller('uploadCtrl', ['$scope', uploadController]);
})();