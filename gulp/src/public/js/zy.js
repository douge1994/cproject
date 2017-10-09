
var imgList =["../images/1.jpg","../images/2.jpg","../images/3.jpg","../images/4.jpg","../images/5.jpg"];
var titleList=["极致现代风格","复古典雅风格","现代简约风格","中式田园风格","柔软舒适风格"];
var urlList= [];
var n=0;
var timer;
//自动播放图片，并判断
function replayer(){
    showContent();
    //判断张数；
    n++;
    if(n>=imgList.length)n=0;
}
//动态创建列表圆点，自动增长
function createLi(){
    var oDiv = document.getElementById("list");
    oDiv.innerHTML="";
    //创建UL,LI
    var ul,li;
    ul= document.createElement("ul");
    for( var i=0;i<imgList.length;i++){
        li=document.createElement("li");
        var replay = document.getElementById("replay")
        li.index=i;
        li.onclick=function(){
            n=this.index;
            showContent()
            clearReplayer()
            replay.style.zIndex=0;
        }
        ul.appendChild(li);
    }
    //添加UL到DIV。
    oDiv.appendChild(ul);
}

//显示，切换图片、标题、列表圆点
function showContent(){
    //每次执行此函数时，修改PHOTO,TITLE,URL。
    var oPhoto = document.getElementById("photo");
    var oTitle = document.getElementById("title");
    oPhoto.innerHTML='<a href="#"><img src="'+imgList[n]+'" alt=""/></a>';
    oTitle.innerHTML=titleList[n];
    //修改列表圆点
    var oList=  document.getElementById("list");
    var aLi = oList.getElementsByTagName("li");
    for(var i=0;i<aLi.length;i++){
        aLi[i].className="";
    }
    aLi[n].className="active";
}
function clearReplayer(){
    clearInterval(timer)
}
window.onload=function(){
        createLi();
        timer=setInterval(replayer,3000);
    }
var flag = 0;
var fla = 0;
var fl = 0;
var f = 0;
function f3(){
    var buJu = document.getElementsByClassName("buju")[0];
    var jieSao = document.getElementsByClassName("jieSao")[0];
    var img = document.getElementsByClassName("img")[0];
    var span = document.getElementsByClassName("span")[0];
    var p1 = document.getElementById("p1")
    if(flag==0){
        img.style.transform = "scale(1.8,1.8)";
        img.style.transition = "all 1s";
        buJu.style.opacity = 0.7;
        buJu.style.transition = "all 1s";
        jieSao.style.marginTop = "-300px";
        jieSao.style.transition = "all 1s";
        jieSao.style.position = "absolute";
        jieSao.style.zIndex = 99;
        span.style.webkitTransform = "rotate(540deg)";
        span.style.transition = "all 1s";
        p1.style.opacity = 1;
        p1.style.transition = "all 1s"
        flag=1
    }else if(flag==1){
        img.style.transform = "scale(1,1)";
        img.style.transition = "all 1s";
        buJu.style.opacity = 1;
        buJu.style.transition = "all 1s";
        jieSao.style.marginTop = "0px";
        jieSao.style.transition = "all 1s";
        span.style.webkitTransform = "rotate(-720deg)";
        span.style.transition = "all 1s";
        p1.style.opacity = 0;
        flag=0
    }
}
function f4(){
    var buJu = document.getElementsByClassName("buju")[1];
    var jieSao = document.getElementsByClassName("jieSao")[1];
    var img = document.getElementsByClassName("img")[1];
    var span = document.getElementsByClassName("span")[1];
    var p1 = document.getElementById("p2")
    if(fla==0){
        img.style.transform = "scale(1.8,1.8)";
        img.style.transition = "all 1s";
        buJu.style.opacity = 0.7;
        buJu.style.transition = "all 1s";
        jieSao.style.position = "relative";
        jieSao.style.zIndex = 99;
        span.style.webkitTransform = "rotate(540deg)";
        span.style.transition = "all 1s";
        p1.style.opacity = 1;
        p1.style.transition = "all 1s"
        fla=1
    }else if(fla==1){
        img.style.transform = "scale(1,1)";
        img.style.transition = "all 1s";
        buJu.style.opacity = 1;
        buJu.style.transition = "all 1s";
        jieSao.style.marginTop = "0px";
        jieSao.style.transition = "all 1s";
        span.style.webkitTransform = "rotate(-720deg)";
        span.style.transition = "all 1s";
        p1.style.opacity = 0;
        fla=0
    }
}
function f5(){
    var buJu = document.getElementsByClassName("buju")[3];
    var jieSao = document.getElementsByClassName("jieSao")[2];
    var img = document.getElementsByClassName("img")[2];
    var span = document.getElementsByClassName("span")[2];
    var p1 = document.getElementById("p3")
    if(fl==0){
        img.style.transform = "scale(1.8,1.8)";
        img.style.transition = "all 1s";
        buJu.style.opacity = 0.7;
        buJu.style.transition = "all 1s";
        jieSao.style.position = "relative";
        jieSao.style.zIndex = 99;
        span.style.webkitTransform = "rotate(540deg)";
        span.style.transition = "all 1s";
        p1.style.opacity = 1;
        p1.style.transition = "all 1s"
        fl=1
    }else if(fl==1){
        img.style.transform = "scale(1,1)";
        img.style.transition = "all 1s";
        buJu.style.opacity = 1;
        buJu.style.transition = "all 1s";
        jieSao.style.marginTop = "0px";
        jieSao.style.transition = "all 1s";
        span.style.webkitTransform = "rotate(-720deg)";
        span.style.transition = "all 1s";
        p1.style.opacity = 0;
        fl=0
    }
}
function f6(){
    var buJu = document.getElementsByClassName("buju")[4];
    var jieSao = document.getElementsByClassName("jieSao")[3];
    var img = document.getElementsByClassName("img")[3];
    var span = document.getElementsByClassName("span")[3];
    var p1 = document.getElementById("p4")
    if(f==0){
        img.style.transform = "scale(1.8,1.8)";
        img.style.transition = "all 1s";
        buJu.style.opacity = 0.7;
        buJu.style.transition = "all 1s";
        jieSao.style.marginTop = "-300px";
        jieSao.style.transition = "all 1s";
        jieSao.style.position = "absolute";
        jieSao.style.zIndex = 99;
        span.style.webkitTransform = "rotate(540deg)";
        span.style.transition = "all 1s";
        p1.style.opacity = 1;
        p1.style.transition = "all 1s"
        f=1
    }else if(f==1){
        img.style.transform = "scale(1,1)";
        img.style.transition = "all 1s";
        buJu.style.opacity = 1;
        buJu.style.transition = "all 1s";
        jieSao.style.marginTop = "0px";
        jieSao.style.transition = "all 1s";
        span.style.webkitTransform = "rotate(-720deg)";
        span.style.transition = "all 1s";
        p1.style.opacity = 0;
        f=0
    }
}
var imgurl=["../images/1new.jpg","../images/2new.jpg","../images/3new.jpg"];
function  showImg() {
    var banener_img = document.getElementById("photo_2")
    banener_img.innerHTML = '<img src="' + imgurl[n] + '">'
}
var n=0;
function  f1(){
    n--
    if(n<0)n=imgurl.length-1;
    showImg()
}
function  f2(){
    n++
    if(n>imgurl.length-1)n=0;
    showImg()
}
/*=========回滚置顶========*/
var xs=document.getElementById("top");
var oXS;
xs.onclick=function(){
    oXS=setInterval(fastToTop,1);
}
function fastToTop(){
    if(window.scrollY<=0){
        clearInterval(oXS);
    }else{
        window.scrollTo(0,window.scrollY-20);
    }
}


