var app = angular.module('myApp',[])
    .controller('first',['$scope','$http',function($scope,$http){

        // $scope.submitMessage = function(){

        //     console.log($scope.password);
        //     $http.post('',$scope.password).then(function(res){
        //         console.log(res)
        //     })
        // }

           /*监听键盘事件(enter对于submit的影响)*/
        $(document).on("keydown", function(event) {
            var event = event || window.event;
            var code = event.keyCode || event.which;
            $scope.$apply(function (){
                if( code == 13){
                    $scope.submitMessage();
                }
            })
        });
        /*提交数据、数据加密、返回状态显示alert框*/
        $scope.submitMessage = function(){
            var data = {};
            if(!$scope.password){
                return false;
            }
            data.password =$scope.password;
            $('.denglu').css({'backgroundColor':'#4990E2'});
            //var url =  $rootScope.url+"/user/login";
            var url;
            loginPageService.postValue(url,data).then(function(res){
                console.log(res);
                if(res.data && res.status == 200){
                    var userPrivilegeValue = res.data.super;
                    localStorage.setItem('super',userPrivilegeValue);
                    var subStr = $location.absUrl().substr(0, $location.absUrl().lastIndexOf('/'));
                    subStr = subStr + '/' ;
                    $location.absUrl(subStr);
                    location.href = subStr;
                }else {
                    $(".modal-box").fadeIn(300).delay(1000).fadeOut(300);
                }
            });
        };
    }]);