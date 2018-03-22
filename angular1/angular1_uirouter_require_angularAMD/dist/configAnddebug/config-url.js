angular.module('myApp')
    .run(["$rootscope", "$state", "$stateParams", function($rootscope, $state, $stateParams){
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }])