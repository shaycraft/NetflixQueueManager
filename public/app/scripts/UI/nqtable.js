'use strict';

var dtOptions = {
    columns: [
        { title: 'id' },
        {title: 'title' }
    ]
}

angular.module('nq.directives')
    .directive('nqTable', function() {

    return {
        restrict: 'AE',

        link: function(scope, elem, attrs) {
            scope.getTableData().then(function(x) {
                dtOptions.data = x.map(function(m) {
                   return [m.id, m.title];
                });
                $(elem).DataTable(dtOptions);
            });
        }
    };
});