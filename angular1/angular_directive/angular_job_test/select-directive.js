angular.module('select-directive',[])
    .directive('selectDirective',selectDirective)
    selectDirective.$inject = [];
    function selectDirective(){
        return {
            restrict:'EA',
        
            template:"<select ng-init='selectedName=value[0]' ng-options='x.name for x in value' ng-change='valuesGet({data:selectedName})' ng-model='selectedName' ></select>",
            scope: {
                //selectedName: '=?',
                value: '=',
                valuesGet: '&',
            },
            link:function($scope,attr,elem){
                // console.log(attr)
                // console.log($scope.value)
                $scope.valuesGet = function(data){
                    console.log(data)
                    console.log($scope.value)
                }
            }
        }
    }