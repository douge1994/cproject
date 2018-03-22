define([
    'angular'
],function(angular){
    var myApp= angular.module('myApp',['ui.router'])
        .controller('indexController',["$scope", function($scope){
                console.log('index')
        }])
        return myApp;
})