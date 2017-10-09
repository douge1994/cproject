angular.module('practice-directive',[])
    .directive('testDirective',function(){
        return {
            restrict:'EA',
            template:'<div><span>{{name}}</span></div>',
            scope:{
                name: '=',
            },
            link:test1,
           // controller:testCtrl
        }
   
    })
    function test1(scope,elem,attr){
        console.log(123);
        console.log(scope.name)
        elem[0].innerHTML = "<span style='color:red'>乖乖了那个地洞{{ name }}</span>";
        scope.$watch('name',function(){
            console.log(scope.name.length);
        },true)
    }

    function testCtrl(scope,elem,attr){
        scope.$watch('name',function(){
            console.log(scope.name.length)
        })
    }