angular.module('myApp')
    .config(['$logProvider',function($logProvider){
        //true���� false�ر�    <debug>
        $logProvider.debugEnabled(false);
    }]);