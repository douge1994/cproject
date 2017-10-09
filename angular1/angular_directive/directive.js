/**
 * Created by 说个锤子 on 2017/7/26.
 */
angular.module('test-directive',[])
    .directive('testDirective',function(){
        return {
            restrict:'EA',
            template: '<div ng-click="say({data:uto})">'+
            '<select ng-init="selectedName=value[0]" ng-options="x.name for x in value" '+
            'ng-change="getOption({datas:selectedName})" ng-model="selectedName"></select>'+
            '<span><input ng-model="checked" ng-change="value1({data1:checked})" type="checkbox"></span>'+
            '<input ng-model="name" placeholder="这个是name" type="text"/></div>',
            //replace:true,
            scope:{
                name: '=',
                op: '=',
                value: '=',
                say: '&',
                value1: '&',
                getOption: '&',
                abgName: '@',
            },
            link:function(scope,attr,ele){
                //console.log(scope.abgName);
                console.log(scope.name);
                scope.uto = 'wanngdddddd123';
                scope.$watch('selectedName',function(){
                    console.log(scope.selectedName)
                })
                scope.$watch('checked',function(){
                    //alert(123);
                    console.log(scope.checked)
                   // console.log(scope.name);
                    //console.log(scope.abgName)

                })
            }
        }
    });
