/**
 * Created by 说个锤子 on 2017/7/6.
 */
define([
    'angular',
    'filters',
    'services',
    'directives',
    'controllers',
    'angularRoute',
], function (angular, filters, services, directives, controllers) {

    // Declare app level module which depends on filters, and services

    return angular.module('myApp', [
        'ngRoute',
        'myApp.controllers',
        'myApp.filters',
        'myApp.services',
        'myApp.directives'
    ]);
});