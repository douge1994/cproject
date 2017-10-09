/**
 * Created by Ëµ¸ö´¸×Ó on 2016/11/7.
 */
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
