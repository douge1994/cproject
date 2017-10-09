angular.module('test-directove',[])
.directive('phone', function ($q, $http) {  
    return {  
        require: 'ngModel',  
        link: function (scope, ele, attrs, ctrl) {  
            ctrl.$asyncValidators.phone = function (modelValue, viewValue) {  
                var d = $q.defer();  
                $http.get('phone.json')  
                .success(function (phoneList) {  
                    console.log(phoneList)
                    if (phoneList.indexOf(parseInt(modelValue)) >= 0) {  
                        d.reject();  
                    } else {  
                        d.resolve();  
                    }  
                });  
                return d.promise;  
            }  
        }  
    }  
})  
.directive('username', function ($q, $http) {  
    return {  
        require: 'ngModel',  
        link: function (scope, ele, attrs, ctrl) {  
            ctrl.$validators.username = function (modelValue, viewValue) {  
                if (modelValue) {  
                    return modelValue.length > 5 ? true : false;  
                };  
                return false;  
            }  
        }  
    }  
})  

.directive('email1',function(){
    var re = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/; 
    return {
        require:'ngModel',
        link: function(scope,ele,attrs,ctrl){
            ctrl.$validators.email1 = function(modelValue,viewValue){
                if(modelValue){
                    console.log(modelValue);
                    var x = re.test(modelValue);
                    console.log(x);
                    return x;
                }else {
                    return false;
                }
            }
        }
    }
})