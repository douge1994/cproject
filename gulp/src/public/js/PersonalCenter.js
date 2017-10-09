/**
 * Created by Administrator on 2016/11/2.
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
/*
var aNavigation1_2
    =document.getElementsByClassName("Navigation1_2")[0];
var bNavigation1_2
    =document.getElementsByClassName("Navigation1_2")[1];
window.onload=function(){
    aNavigation1_2.style.index="100";
    bNavigation1_2.style.index="98";
    console.log(aNavigation1_2.style.index);
}*/
