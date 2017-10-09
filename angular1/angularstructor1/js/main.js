/**
 * 配置requirejs
 */
require.config({
    paths:{
        angular: '../../bower_components/angular/angular',
        angularRoute: '../../bower_components/angular-route/angular-route',
        angularMocks: '../../bower_components/angular-mocks/angular-mocks',
        text: '../../bower_components/requirejs-text/text'
    },
    shim:{
        'angular' : {'exports' : 'angular'},
        'angularRoute': ['angular'],
        'angularMocks': {
            deps:['angular'],
            'exports':'angular.mock'
        }
    },
    priority:[
        'angular'
    ]
});

window.name = 'NG_DEFER_BOOTSTRAP!';
require([
    'angular',
    'app',
    'routes'
],function(angular,app,routes){
    var $html = angular.element(document.getElementsByTagName('html')[0]);

    angular.element().ready(function() {
        angular.resumeBootstrap([app['name']]);
    });

});