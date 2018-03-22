var app= angular.module('myApp',['ui.router'])
    .config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function($stateProvider, $urlRouterProvider,$locationProvider) {
        var baseUrl = './html';
        $locationProvider.hashPrefix('');
        $urlRouterProvider.otherwise('/index');
        $stateProvider
            .state("home", {
                url: '/',
                template:"<div>homePage</div>"

            })
            .state("index", {
                url: '/index/:id/:name',
                //template:"<div>indexcontent</div>",
                templateUrl:'./html/home/home.html',
                controller:'homeCtrl'
            })
            .state("test", {
                url: '/test/:username',
                template:"<div>testContent</div>",
                controller:["$stateParams", function($stateParams){
                    console.log($stateParams.username)
                }]
            })
    }]);
