define([
    'angular',
    'angularAMD',
    'uiRouter',
    'indexController'
],function(angular,angularAMD,x,app){
    var myApp= angular.module('myApp',['ui.router'])
        .controller('indexCtrl',function($scope){
                console.log('index')
        })
        //app
        .config(function ($stateProvider, $urlRouterProvider,$locationProvider) {  
            $locationProvider.hashPrefix('');
            //解决路由异常的方法  
            $urlRouterProvider.otherwise('/test');  
            $stateProvider  
                .state('test', angularAMD.route({  
                    url: '/test',  
                    templateUrl: './html/test/test.html',  
                    controllerUrl: './html/test/test'
                }))
                .state('index',angularAMD.route({  
                    url: '/index',  
                    templateUrl: './html/home/home.html',  
                    controllerUrl: './html/home/home'
                }))
        
        })
        //return angularAMD.bootstrap(app);
        return angularAMD.bootstrap(myApp);
})