(function(){
    var app = angular.module("myApp",['practice-directive','test-service'])
        .controller('firstCtrl',firstCtrl)
        firstCtrl.$inject = ['$scope','$interval','testService'];
        function firstCtrl($scope,$interval,testService){
           // $scope.value = 100;
        //     $scope.value = [
        //     {"ID":1,"remark":"xj系统管理员","dataType":"sys","keyValue":"xxx公司的系统管理员","description":"2017-06-20","de":"2017-06-20"},
        //     {"ID":2,"remark":"东北系统管理","dataType":"sys","keyValue":"xxx公司的系统管理员","description":"2017-06-20","de":"2017-06-20"},
        //     {"ID":3,"remark":"天津系统管理","dataType":"sys","keyValue":"xxx公司的系统管理员","description":"2017-06-20","de":"2017-06-20"},
        //     {"ID":4,"remark":"北京公司管理","dataType":"company","keyValue":"xxx公司的公司管理员","description":"2017-06-22","de":"2017-06-20"},
        //     {"ID":5,"remark":"东北公司管理","dataType":"company","keyValue":"xxx公司的公司管理员","descriptiondescription":"2017-06-21","de":"2017-06-20"},
        //     {"ID":6,"remark":"成都公司一般","dataType":"user","keyValue":"xxx公司的一般用户","description":"2017-06-18","de":"2017-06-20"},
        //     {"ID":7,"remark":"成都公司一般","dataType":"user","keyValue":"xxx公司的一般用户","description":"2017-06-19","de":"2017-06-20"},
        //     {"ID":8,"remark":"xj系统管理员","dataType":"sys","keyValue":"xxx公司的系统管理员","description":"2017-06-20","de":"2017-06-20"},
        //     {"ID":9,"remark":"东北系统管理","dataType":"sys","keyValue":"xxx公司的系统管理员","description":"2017-06-20","de":"2017-06-20"},
        //     {"ID":10,"remark":"天津系统管理","dataType":"sys","keyValue":"xxx公司的系统管理员","description":"2017-06-20","de":"2017-06-20"},
        //     {"ID":11,"remark":"北京公司管理","dataType":"company","keyValue":"xxx公司的公司管理员","description":"2017-06-22","de":"2017-06-20"},
        //     {"ID":12,"remark":"东北公司管理","dataType":"company","keyValue":"xxx公司的公司管理员","descriptiondescription":"2017-06-21","de":"2017-06-20"},
        //     {"ID":13,"remark":"成都公司一般","dataType":"user","keyValue":"xxx公司的一般用户","description":"2017-06-18","de":"2017-06-20"},
        //     {"ID":14,"remark":"成都公司一般","dataType":"user","keyValue":"xxx公司的一般用户","description":"2017-06-19"}
        // ]
        //     $interval(function(){
        //         $scope.value.pop();
        //        // console.log($scope.value)
        //     },3000)
        //     console.log(testService.getList)
            // $scope.$watch(testService,function(){
            //     console.log(testService)
            // },true)
            rooling();
            function rooling(){
                $scope.timmer=$interval(function(){
                    console.log(123)
                },2000);
            }
            $scope.deleteTimmer = function(){
             }
            $('#aa').on('click',function(){
                console.log('------清除？-------')
                console.log($interval.cancel($scope.timmer))
                $interval.cancel($scope.timmer)

            })
        }

       
})()
