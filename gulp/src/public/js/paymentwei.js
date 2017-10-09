/**
 * Created by Administrator on 2016/11/1.
 */
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
/*===========倒计时============*/
/*console.log(otime.style.color)*/
var Time = 86400;
setInterval(function SJDown(){
        var otime=document.getElementById("time");
    if(Time>0){
        var oTime = Time;
        var S=Time%60;
        var M=((Time-S)/60)%60;
        var h=(Time/3600);
        var H=parseInt(h);
        otime.innerHTML=H+"时"+M+"分"+S+"秒";
        Time--;
        //console.log(otime.style.color);
    }
}
,1000);


