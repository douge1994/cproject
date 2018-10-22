angular.module('myApp')
    .run(function($rootscope, $state, $stateParams){
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    })