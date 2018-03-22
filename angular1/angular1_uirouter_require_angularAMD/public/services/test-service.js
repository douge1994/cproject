define(['app1'],function(app1){
    app1.factory('testService',['$rootScope','$http', '$q',function($rootScope,$http,$q){
        var testService={};
        var url=$rootScope.url? $rootScope.url:'';
        console.log(url);
        /*
         * 查询所有菜单信息
         * */
        testService.searchAllMenu = function () {
            return $http.get('./mock/mock1.json');
        };
        return testService;
    }])
});