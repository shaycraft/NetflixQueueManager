'use strict';

(function() {
    var uploadController = function($scope) {
        $scope.testMessage = "fuck you";
    }

    angular.module('nq.controllers')
        .controller('uploadCtrl', ['$scope', uploadController]);
})();