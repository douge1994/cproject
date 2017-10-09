(function(){
    var myapp = angular.module('myApp',['test-directove',"filter-test",'yanzheng-directive','my-services','test-service','select-directive'])
        .controller("myCtrl",test)
        .controller('myCtrlChild',test1)
        test1.$inject = ["$scope","$interval",'$filter','githubService','testService','selectDirective'];
        test.$inject = ["$scope","$interval",'$filter','githubService','testService','selectDirective'];
        function test($scope,$interval,$filter,githubService,testService,selectDirective) {
            $scope.title = 'Grinding skills';
            $scope.$watch('value',function(newValue,oldValue,scope){
                console.log(newValue)
                console.log(oldValue)
            })
            $scope.value1 = 9999.05
            
            
            $scope.getd = function(){
                // alert(123)
               $scope.value1= Math.round(parseFloat($scope.value1))
                //$scope.value1 = Math.ceil($scope.value1)
                console.log(typeof($scope.value1))
            }
            $scope.numbers = [1.4,1.5,2.0,3.2]
            //$scope.value1 =Math.ceil(0.75);
            $scope.myFunction = function(x){
                return x>2;
            }

            $scope.items = [
                {'name':'wnag',age:'18'},
                {'name':'xnag1',age:'19'},
                {'name':'ynag2',age:'25'}
            ]
            
            $scope.user = 'John Doe'; 
            $scope.email = 'john.doe@gmail.com'; 


            //案例二form控制
            $scope.master = {}; 
            $scope.update=function(user1){ 
                //angular深度复制angular.copy(source, [destination]);
                console.log(user1)
                $scope.master=angular.copy($scope.user1); 
                console.log($scope.master)
            }; 
            $scope.reset=function(){ 
                console.log($scope.master)
                $scope.user1=angular.copy($scope.master); 
            }; 
            $scope.isUnchanged=function(user1){ 
                //判断user和$scope.master是否相等，相等返回true，否则返回false 
                return angular.equals(user1,$scope.master); 
            }; 
            //$scope.reset(); 


            //案例三form-提交
            $scope.user2={ 
                userName:"山水子农", 
                password:''
            }; 
            $scope.saveValue=function(){ 
                console.log("保存数据中..."); 
            };


            // $scope.number1 = parseFloat('12.34')/100;
            //define two objects or Array equals?
            console.log(angular.equals({'wang':1},{'chuan':2}));
            angular.forEach([1,0,3],function(val){
                val= val+1;
                console.log(val)
            })
            console.log(angular.fromJson({wang:1234}));

           // $scope.events = githubService.events('auser');
           console.log(githubService)
           $scope.testValue = githubService;
           console.log($scope.testValue)
        }

        function test1($scope,$interval,$filter,githubService,testService,selectDirective){
            console.log(testService.name)
            $scope.test1Value = githubService;
            $scope.$watch('testValue.name',function(){
               // alert(123)
            
            })
            $scope.optionValue = [{name:'12'},{name:'34'},{name:'56'}]
            
            $scope.optionValue.unshift({name:'number'})
            $scope.huoqu = function(data){
                //alert(123)
                console.log(data);
            }
        }

       
})()