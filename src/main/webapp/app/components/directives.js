'use strict';

/* Place you Global Directives in this file */

angular.module('myApp.directives', [])
    .directive('mapDir', function ($window) {
            return {
                restrict: 'A',
                link: function (scope, element) {

                    function onResize() {
                        var mapDiv = element;
                        mapDiv.height(mapDiv.width() * 1.45);
                    }

                    onResize();
                    angular.element($window).on('resize', onResize);

                }
            };

        });
