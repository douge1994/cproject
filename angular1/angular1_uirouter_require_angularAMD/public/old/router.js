// define(['app1','angularAMD','uiRouter'],function(myApp,angularAMD){
//    /* myApp.config(function($controllerProvider,$compileProvider,$filterProvider,$provide){  
//         myApp.register = {  
//             //得到$controllerProvider的引用  
//             controller : $controllerProvider.register,  
//             //同样的。这里也可以保存directive / filter /service 的引用  
//             directive : $compileProvider.register,  
//             filter : $filterProvider.register,  
//             service : $provide.service,  
//             factory : $provide.factory  
//         };  
//     })  */

//         myApp.config(function ($stateProvider, $urlRouterProvider,$locationProvider) {  
//             $locationProvider.hashPrefix('');
//              //解决路由异常的方法  
//             $urlRouterProvider.otherwise('/test');  
//             $stateProvider  
//                 .state('test', angularAMD.route({  
//                     url: '/test',  
//                     templateUrl: './html/test/test.html',  
//                     controllerUrl: './html/test/test'
//                 }))
//                 .state('index',angularAMD.route({  
//                     url: '/index',  
//                     templateUrl: './html/home/home.html',  
//                     controllerUrl: './html/home/home'
//                     // resolve: {  
//                     //     loadCtrl: ['$q',  
//                     //         function ($q) {  
//                     //             var deferred = $q.defer();  
//                     //             //异步加载controller／directive/filter/service  
//                     //             require([  
//                     //                 './html/home/home.js'  
//                     //             ], function () {  
//                     //                 deferred.resolve();  
//                     //             });  
//                     //             return deferred.promise;  
//                     //         }]  
//                     // }  
//                 }))
           
//         });  
//         // require(['angularAMD','app1','router','uiRouter'],function(angularAMD,app1){
//         return angularAMD.bootstrap(app1);
//         // })
// })
