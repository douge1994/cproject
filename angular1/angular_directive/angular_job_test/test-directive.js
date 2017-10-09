angular.module('yanzheng-directive',[])
    .directive('yanZheng',function(){
        return {
            restrict:'A',
            require:'^ngModel',
            link:function(scope,elem,attrs,ngModel){
                console.log(ngModel);
                if (ngModel) {
                    var emailsRegexp = /^([a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*[;；]?)+$/i;
                }
                var customValidator = function (value) {
                    console.log(value)
                    var validity = ngModel.$isEmpty(value) || emailsRegexp.test(value);
                    ngModel.$setValidity("yan-zheng", validity);
                    return validity ? value : undefined;
                };
                ngModel.$formatters.push(customValidator);
                ngModel.$parsers.push(customValidator);
            }
        }
    })

    // 核心属性:
    //     $viewValue;$modelValue
    // 核心管道：
    //     $parsers<$viewValue->$modelValue>//与之相反的是formatters
    //     $validators用来添加同步验证器
    //     $asyncValidators用来添加异步验证器
    // 常用属性：
    //     $error没有通过的验证器名称以及对应的错误信息
    //     $valid 表单项是否都通过验证，都通过时为true，与之相对的是$invalid
    //     $touched 表单是否被访问过,如果获得焦点,在失去时该值为true，与之相对的是$untouched
    //     $dirty表示用户是否和表单项交互过，只要有任何改变。该值为true，与之相对的是$pristine
    // 常用方法：
    //     1.$render
    //     2.$setViewValue












    (function(){
    var app = angular.module('myApp',[])
        .controller('loginCtrl',loginPage);
    loginPage.$inject = ['$scope','$http'];
    function loginPage($scope,$http){
        $scope.username = '';
        $scope.password = '';
        $scope.password = '';
        $scope.verficationcode = '';
        $scope.modalState = false;
        //输入字段最少minlength位
        $scope.minlength = 6;
        //提交数据以及相关操作
        $scope.submitMessage = function(){
            var obj = {};
            obj.username = md5($scope.username);
            obj.password = md5($scope.password);
            console.log(obj);
            if(angular.uppercase($scope.verficationcode) != angular.uppercase($("#checkCode").val())){
                //console.log('请重新输入验证码');
                $scope.stateValue = 'errCode';
                $(".modal-box").show(300).delay(3000).hide(300);
                $scope.verficationcode = '';
                getCode();
                return false;
            }
            //http请求获取数据
            /*loginPageService.postValue(obj).then(function(res){
                console.log(res);
                $scope.stateValue = 'successfulState';
                $(".modal-box").show(300).delay(3000).hide(300);
                //location.href = '';
            },function(err){
                console.log('请重新输入用户名和密码'+err);
                $scope.stateValue = 'errMessage';
                $(".modal-box").show(300).delay(3000).hide(300);
            });*/
            $http({
             method: 'POST',
             url: '',
             data: obj
             }).then(function(res){
             console.log(res);
             $scope.stateValue = 'successfulState';
             $(".modal-box").show(300).delay(3000).hide(300);
             //location.href = '';
             },function(errMessage){
             console.log('请重新输入用户名和密码');
             $scope.stateValue = 'errMessage';
             $(".modal-box").show(300).delay(3000).hide(300);
             });
        };
        //忘记密码
        $scope.forgetPassword = function(){

        };
        /*
         * 验证码模块代码
         * getCode()//初始化动态生成验证码
         * $scope.getVerificationCode //点击更新验证码
         * */
        getCode();
        $scope.getVerificationCode = function (){
            $scope.verficationcode = '';
            getCode();
        };
        var code = '';
        function getCode() {
            code = "";
            var codeLength = 4;//验证码的长度
            var checkCode = document.getElementById("checkCode");
            var selectChar = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
                'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');//所有候选组成验证码的字符，当然也可以用中文的
            for(var i = 0; i < codeLength; i++){
                var charIndex = Math.floor(Math.random() * 36);
                code += selectChar[charIndex];
            }
            if (checkCode){ checkCode.value = code; }
        }
    }
})();



