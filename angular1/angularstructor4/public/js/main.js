require.config({
    paths: {
        "jquery": "libs/jquery-1.11.1",
        "angular" : "libs/angular/angular.min",
        "angularRoute" : "libs/angular-route/angular-route.min",

        "app" : "controllers/app",
        "loadingInterceptor" : "controllers/loadingInterceptor",
        "runStateCtrl" : "controllers/run_stateCtrl",

        "route" : "routes/appRoute"
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angularRoute':{
            deps: ["angular"],
            exports: 'angular-route'
        },
        'jquery':{
            exports:'jquery'
        }
    }
});
require([
        'jquery',
        'angular',
        'route',
        'app',
        'runStateCtrl',
        'loadingInterceptor'
    ],
    function ($,angular,route){
    console.log('dddddd');
    $(function () {
        angular.bootstrap(document,["myApp"]);//初始化app
    })

});
window.name = "NG_DEFER_BOOTSTRAP!";

//require(['angular', 'app'], function(angular){
//    angular.element(document).ready(function(){
//        angular.bootstrap(document, ['myApp']);
//    });
//
//});
/*require( [
    'angular',
    'app',
    'route'
], function(angular, app, route) {
    var $html = angular.element(document.getElementsByTagName('html')[0]);

    angular.element().ready(function() {
        angular.resumeBootstrap([app['name']]);
    });
});*/
