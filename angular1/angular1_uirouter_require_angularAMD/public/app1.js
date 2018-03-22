define([
    'angular',
    'angularAMD',
    'uiRouter'
],function(angular,angularAMD,x,app){
    var myApp= angular.module('myApp',['ui.router'])
        .controller('indexCtrl',function($scope){//index ====== controller
                console.log('index-ctrl')
        })
        //路由配置
        .config(function ($stateProvider, $urlRouterProvider,$locationProvider) {  
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
        return angularAMD.bootstrap(myApp);//angularAMD此时代替手动注册angular的一些指令,如controller,directive,complie等等。可以查看old文件夹的register内容
});