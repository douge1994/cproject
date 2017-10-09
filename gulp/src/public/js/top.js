/**
 * Created by admin on 2016/11/10.
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
        window.scrollTo(0,window.scrollY-10);
    }
}

