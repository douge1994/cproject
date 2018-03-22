angular.module('myApp')
    .config(['$logProvider',function($logProvider){
        //true¿ªÆô false¹Ø±Õ    <debug>
        $logProvider.debugEnabled(false);
    }]);