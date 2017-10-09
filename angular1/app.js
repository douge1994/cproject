/**
 * Created by 说个锤子 on 2017/4/30.
 */
var cookie = require("cookie-parser");
var session = require("express-session");
var express = require("express");
//var ejs = require("ejs");
var app=express();
//app.set("views",__dirname+"/public/views");//设置视图模板路径
//app.engine("html",ejs.__express);//设置视图模板的文件类型。
//app.set("views engine","html");//启动视图模板引擎 由于ejs提示功能没有html好，所以这里还是html后缀格式

app.configure(function(){
    app.use(express.logger("dev"));
    //cookie和session一般写在比较靠前的地方
    app.use(cookie());
    app.use(session({
        secret:"123456",//编码秘钥
        name:"mycookie",//设置cookie的名称。默认值为connect.sid
        cookie:{
            rolling:true,//是否更新session-cookie的实效时间。
            resave:false,//重新获取session-cookie会导致有效时间重头计算
            maxAge:3000000//表示的是cookie的有效时间
        }//配置的参数在会响应到客户端
    }));//session在使用时候需要传参 这里传入一个对象
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(__dirname+"/angular_directive"));
    app.use(express.errorHandler());
});

app.listen(8888,function(){
    console.log("服务器正在运行中，端口号为8888");
});
/*
//拍卖产品合集（拥有状态）
app.post("/carsPaimai.do",cars.status)

//获取汽车页面公告
app.post("/getInformation.do",cars.information)*/
  app.get("/login.do",function(req,res){
      var user = req.query.username;
      console.log(user);
      res.send({name:'wangchuan'})
});