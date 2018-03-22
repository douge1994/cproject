    // app.controller('testCtrl',['$scope',function($scope){
    //     $scope.abc=function(){
    //         console.log('test is now')
    //     }
    // }]);
    define(['app1'],function(myApp){  
        myApp.controller('testCtrl', [ '$scope',  
               function($scope){  
                 console.log('this is test00000000')
               }  
           ])  
       })  