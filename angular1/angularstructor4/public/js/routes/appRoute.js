/**路由
 * 不同的模块被加载进入主视图。并绑定控制器
 */
define(['app'],function(app){
    return app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
        $locationProvider.hashPrefix('');
        $routeProvider
            .when('/a',{
                templateUrl:"views/run_state.html",
                controller:'runStateCtrl',
                //resolve:{
                //    delay:ctrlRegister('runStateCtrl',['../controllers/run_stateCtrl.js'])
                //}
                //template:'zhegeshi aaaa'
            })
            .when('/b',{
                templateUrl:"views/xq.html",
                controller:"loadingInterceptor",
                //resolve:{
                //    delay:ctrlRegister('loadingInterceptor',['../controllers/loadingInterceptor.js'])
                //}
               // template:'zhegeshi  bbbbb'
                })
        .otherwise({redirectTo:'/a'});
        function ctrlRegister (ctrlName, ctrlModule) {
            return function ($q) {
                var defer = $q.defer();
                require(ctrlModule, function (controller) {
                    $controllerProvider.register(ctrlName, controller);
                    defer.resolve();
                });
                return defer.promise;
            }
        }
    }])
});

