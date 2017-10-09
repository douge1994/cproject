/**
 * Created by 说个锤子 on 2017/7/6.
 */
define(['angular', 'services'], function (angular, services) {
    /* Filters */
    angular.module('myApp.filters', ['myApp.services'])
        .filter('interpolate', ['version', function(version) {
            return function(text) {
                return String(text).replace(/\%VERSION\%/mg, version);
            };
        }]);
});