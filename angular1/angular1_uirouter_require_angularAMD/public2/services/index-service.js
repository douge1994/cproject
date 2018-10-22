define([
    'angular'
],function(angular){
    console.log(angular)
    var app = angular.module('indexService',[])
    app.factory('indexService',['$rootScope','$http', '$q',function($rootScope,$http,$q){
        var indexService={};
        var url=$rootScope.url? $rootScope.url:'';
        console.log(url);
        /*
         * 查询所有菜单信息
         * */
        indexService.searchAllMenu = function () {
            return $http.get('./mock/mock1.json');
        };
        return indexService;
    }])
    return app
});
