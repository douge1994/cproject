//分离 service 的做法
define([
    'angular',
    'angularAMD',
    'uiRouter',
    './services/index-service'
],function(angular,angularAMD,x){
    var myApp= angular.module('myApp',['ui.router','indexService'])
        //路由配置
        myApp.config(function ($stateProvider, $urlRouterProvider,$locationProvider) {  
            $locationProvider.hashPrefix('');
            //解决路由异常的方法  
            $urlRouterProvider.otherwise('/home');
            $stateProvider  
                .state('test', angularAMD.route({  //使用angularAMD.route处理--避免手动声明controller等
                    url: '/test',  
                    templateUrl: './html/test/test.html',  
                    controllerUrl: './html/test/test'
                }))
                .state('home',angularAMD.route({
                    url: '/home',
                    templateUrl: './html/home/home.html',  
                    controllerUrl: './html/home/home'
                }))
        });
        //controller
        myApp.controller('indexCtrl',['indexService','$scope','$rootScope',function(indexService,$scope,$rootScope){//index ====== controller
            // console.log('index-ctrl')
            // console.log(indexService)
            $rootScope.url =  '78987897799'
            indexService.searchAllMenu().then(function(res){
                // console.log('index -----  controlles')
                // console.log(res)
                
            });
        }])
    return myApp;
})

//不分离 service 的做法 《仅仅在app1.js 做出angular 启动》
// define([
//     'angular',
//     'angularAMD',
//     'uiRouter',
// ],function(angular,angularAMD,x){
//     // console.log(indexs)
//     var myApp= angular.module('myApp',['ui.router'])
//         //路由配置
//         myApp.config(function ($stateProvider, $urlRouterProvider,$locationProvider) {  
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
//         });
//         //service
//         myApp.factory('indexService',['$rootScope','$http', '$q',function($rootScope,$http,$q){
//             var indexService={};
//             var url=$rootScope.url? $rootScope.url:'';
//             indexService.searchAllMenu = function () {
//                 return $http.get('./mock/mock1.json');
//             };
//             return indexService;
//         }])
//         //controller
//         myApp.controller('indexCtrl',['indexService','$scope','$rootScope',function(indexService,$scope,$rootScope){//index ====== controller
//             console.log('index-ctrl')
//             console.log(indexService)
//             $rootScope.url =  '78987897799'
//             indexService.searchAllMenu().then(function(res){
//                 console.log('index -----  controlles')
//                 console.log(res)
//             });
//         }])
//     return myApp;
// })


