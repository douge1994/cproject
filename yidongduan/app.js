var express =  require("express"); //1. 引用 express模块
var app = express(); //2. 创建服务器
app.set('port',8080); //3. 设置端口号；
app.configure(function(){//4. 配置服务器
    app.use(express.bodyParser()); //处理POST请求的数据。
    app.use(express.logger("dev"));// 设置日志中间件。“dev",表示开发模式；
    app.use(express.methodOverride()); //把非POST请求，转换成POST请求。put,delete
    app.use(app.router);//设置服务器的路由模块。
    app.use(express.static(__dirname));//  设置项目中的静态资源的目录。
    //__dirname,代表当前项目的根目录。
    app.use(express.errorHandler());//当发生错误时，把错误信息打印或显示在控制台。
});
app.listen(app.get('port'),function(){//5. 监听，并使用这个端口号。
    console.log("服务器正在运行中，端口号为8888.");
});
app.get("/oo.do",function(req,res){
    res.redirect("main_personal.html")
})
