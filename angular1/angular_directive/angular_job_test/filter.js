angular.module('filter-test',[])
        .filter('myFilter',filterTest)
        function filterTest(){
            return function(){
                var arr = Array.prototype.slice.call(arguments),sum = 1;
                console.log(arr)
                return sum = sum+arr[0];
            }
        }

      
    