/**
 *过滤器文件(过滤器可共用)
 */
angular.module('myApp.filters',[])
.filter('interpolate',['version',function(version){
        return function(text){
            return String(text).replace(/\%VERSION\%/mg,version)
        }
    }]);