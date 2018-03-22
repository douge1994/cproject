(function(){
    var config={
        paths:{
            "angular":'../lib/angular/angular.min',
            "jquery":'../lib/jquery/jquery-2.1.0.min',
            "uiRouter":'../lib/angular/angular-ui-router.min',
            'angularAMD':'../lib/angularAMD/angularAMD.min',
            'ngload':'../lib/angularAMD/ngload'
        },
        shim :{
            'angular':{
                exports:'angular'
            },
            'uiRouter':{
                deps:['angular']
            },
            "angularAMD":["angular"],
            "ngload":["angularAMD"]
        }
    }
    require.config(config);

    require(['angularAMD','app1','router','uiRouter'],function(angularAMD,app1){
        angularAMD.bootstrap(app1);
    })
})(window)

/*
require.config是用来配置模块加载位置，
简单点说就是给模块起一个更短更好记的名字，比如将百度的jquery库地址标记为jquery，
这样在require时只需要写["jquery"]就可以加载该js，
paths还有一个重要的功能，就是可以配置多个路径，如果远程cdn库没有加载成功，可以加载本地的库

在使用requirejs时，加载模块时不用写.js后缀的，当然也是不能写后缀
上面例子中的callback函数中发现有$参数，这个就是依赖的jquery模块的输出变量，
如果你依赖多个模块，可以依次写入多个参数来使用：
require.config({
    paths : {
        "jquery" : ["http://libs.baidu.com/jquery/2.0.3/jquery",'a/jquery'],
        "a" : "js/a"   
    }
})
require(["jquery","a"],function($,a){
    $(function(){
        alert("load finished");  
    })
})
*/ 
