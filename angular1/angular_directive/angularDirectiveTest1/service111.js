angular.module('test-service',[])
    .factory('testService',testService)
    testService.$inject = ['$http']
    function testService($http){
        var json1 = [123];
        var jsons = {
            putList: function(data){
                json1.push(data)
            },
            getList: function(){
                return json1
            }
        }
        return jsons;
    }