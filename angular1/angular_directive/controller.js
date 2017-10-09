/**
 * Created by 说个锤子 on 2017/7/26.
 */
var app = angular.module('myApp',['test-directive'])
    .controller('myCtrl',['$scope','$http','$location',function($scope,$http,$location){
        $scope.test = 'wangchuan';
        $scope.options = [{name:'12'},{name:'34'},{name:'56'}]
        $scope.lists = ['wang','cahun','is','good'];
        $scope.godC = function(data){
            // alert('bingo');
            //console.log(data);
        };
        $scope.a = [
            {
                name:'wang',
                equipValues:[
                    {unit:'one'},{unit:'two'},{unit:'three'}
                ]
            },
            {
                name:'waun',
                equipValues:[
                    {unit:'one'},{unit:'two'},{unit:'three'}
                ]
            },
            {
                name:'wahu',
                equipValues:[
                    {unit:'one'},{unit:'two'},{unit:'three'}
                ]
            }
        ]
        $scope.getV = function(data1) {
            console.log(data1);
        };
        $scope.getOptionSelected = function(data2){
            console.log(data2)
        };
       // $scope.abgName = 'abgNamededdd';
        $scope.user = function(){
            console.log(123);            
            $http.get('/login.do',{data:'username'})
                .then(function(res){
                    console.log(res)
                })
        };
        $scope.empty = false;
        $scope.getStatu = function(){
            console.log($scope.value1);//非空字符串转为boolean全特么是true==》巨坑
            console.log( eval($scope.value1));
            $scope.empty = eval($scope.value1);
            console.log($scope.empty)
        }
        console.log($location)
        var subStr = $location.absUrl().substr(0, $location.absUrl().lastIndexOf('/'));
        subStr = subStr + '/' ;
        console.log(subStr)

        var a = {
            name:'wang',
            setName:function(){
                this.name = 'chuan';
            }
        }
        var b = {};
        angular.copy(a,b) //angular.copy(src,dst)深度复制
        console.log(angular.equals(a,b)); //true
        var c = {};
        angular.extend(c, a);
        
        $('.box').hover(function(){
            $('.box1').fadeIn(500).delay(200);
            return false;
        },function(){
            $('.box1').fadeOut(500).delay(200)
            return false;
        })

    }]);