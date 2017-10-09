/**
 * 建立angular.module,所有的操作都是在此基础上进行的
 */
define(['angular', 'angularRoute'],
    function (angular) {
    var app = angular.module('myApp',['ngRoute']);//引入需要以来的模块
    return app;
});