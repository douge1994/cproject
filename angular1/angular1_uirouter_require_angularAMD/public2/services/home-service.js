define(['app1'],function(app1){
    app1.factory('homeService',['$rootScope','$http', '$q',function($rootScope,$http,$q){
        var homeService={};
        var url=$rootScope.url? $rootScope.url:'';
        console.log(url);
        /*
         * 查询所有菜单信息
         * */
        homeService.searchAllMenu = function () {
            return $http.get('./mock/mock1.json');
        };
        return homeService;
    }])
});