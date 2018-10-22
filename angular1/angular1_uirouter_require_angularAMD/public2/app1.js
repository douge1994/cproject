//分离controller 和 service 仅仅留下angular 启动项 ------ 《把controller  分离到mainController中 ， service 以模块注入的方式 注入到mainController中》
define([
    'angular',
    'angularAMD',
    'uiRouter',
    './mainController',
],function(angular,angularAMD,x,myApp){
        return angularAMD.bootstrap(myApp);//angularAMD此时代替手动注册angular的一些指令,如controller,directive,complie等等。可以查看old文件夹的register内容
});



//不分离service 和controller 《在app1 中包含了controller + service + 路由配置 + 启动angular》
// define([
//     'angular',
//     'angularAMD',
//     'uiRouter',
// ],function(angular,angularAMD,x,myApp){
//     var myApp= angular.module('myApp',['ui.router'])
//         .controller('indexCtrl',function($scope){//index ====== controller
//                 console.log('index-ctrl')
//                 indexService.searchAllMenu().then(function(res){
//                 });
//         })
//         //路由配置
//         .config(function ($stateProvider, $urlRouterProvider,$locationProvider) {  
//             $locationProvider.hashPrefix('');
//             //解决路由异常的方法  
//             $urlRouterProvider.otherwise('/home');
//             $stateProvider  
//                 .state('test', angularAMD.route({  //使用angularAMD.route处理--避免手动声明controller等
//                     url: '/test',  
//                     templateUrl: './html/test/test.html',  
//                     controllerUrl: './html/test/test'
//                 }))
//                 .state('home',angularAMD.route({
//                     url: '/home',
//                     templateUrl: './html/home/home.html',  
//                     controllerUrl: './html/home/home'
//                 }))
        
//         })
//         .factory('indexService',['$rootScope','$http', '$q',function($rootScope,$http,$q){
//             var indexService={};
//             var url=$rootScope.url? $rootScope.url:'';
//             console.log(url);
//             /*
//              * 查询所有菜单信息
//              * */
//             indexService.searchAllMenu = function () {
//                 return $http.get('./mock/mock1.json');
//             };
//             return indexService;
//         }])
//         return angularAMD.bootstrap(myApp);//angularAMD此时代替手动注册angular的一些指令,如controller,directive,complie等等。可以查看old文件夹的register内容
// });