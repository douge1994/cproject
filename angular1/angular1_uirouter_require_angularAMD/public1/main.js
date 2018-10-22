var libUrl='../lib';
    require.config({
        paths:{
            //库配置
            "angular":libUrl+'/angular/angular.min',
            "jquery":libUrl+'/jquery/jquery-2.1.0.min',
            "uiRouter":libUrl+'/angular/angular-ui-router.min',
            "angularAMD":libUrl+'/angularAMD/angularAMD.min',
            "ngload":libUrl+'/angularAMD/ngload',
            //插件等路径配置
            "bootstrap":libUrl+'/bootstrap/assets/js/bootstrap.min',
            /*datatable*/
            "datatables": libUrl+"/dataTables/jquery.dataTables.min",
            "datatables.net-bs": libUrl+"/dataTables/dataTables.bootstrap",
            "datatables.net-buttons": libUrl+"/dataTables/dataTables.buttons.min",
        },
        map: { //使用本map配置,所有的模块都将加载下面文件，
            '*': {
                'css':libUrl+ '/require/css.min'
            }
        },
        shim :{//垫片（非AMD模式资源的声明）
            'angular':{
                exports:'angular'
            },
            'uiRouter':{
                deps:['angular']
            },
            "angularAMD":["angular"],
            "ngload":["angularAMD"],

            "datatables.net-bs":["datatables"],
            "datatables.net-buttons":["datatables"],
            /*动态加载css样式 css!*/
            "datatables":["jquery",'css!../lib/dataTables/jquery.dataTables.min','css!../lib/dataTables/buttons.bootstrap.min']
        },
        deps:['app1']//启动应用（依赖）<main作为html引入js需要依赖 全局的app1.js；若还依赖其他的全局，可以在此处声明>
    });


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
/*
理想状况下，每个加载的脚本都是通过define()来定义的一个模块；
但有些'浏览器全局变量注入'型的传统/遗留库并没有使用define()来定义它们的依赖关系，
你必须为此使用shim config来指明它们的依赖关系。 如果你没有指明依赖关系，加载可能报错。
这是因为基于速度的原因，RequireJS会异步地以无序的形式加载这些库。
*/