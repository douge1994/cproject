define(['app1'],function(app){
    app.directive('cool', ['$compile',
        function ($compile) {
            return {
                restrict: 'EA',
                template:'<p>this is directive test!!!!!!!!!!!!</p>',
                link: function (scope, element, attrs) {
                    scope.cellTemplateScope = scope.$eval(attrs.cellTemplateScope);
                }
            };
        }])
});