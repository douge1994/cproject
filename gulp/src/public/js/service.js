/**
 * Created by admin on 2016/11/10.
 */
var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var banner = document.getElementById("banner");
window.onscroll = function () {
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    if (t > 0){
        banner.style.webkitTransform = "scale(1,1)";
        banner.style.transition = "all 2s";
    }
    if (t > 400) {
        box1.style.marginLeft = "717px";
        box1.style.transition = "all 2s";
        box1.style.opacity = "1";
    }
    if (t > 600){
        box2.style.marginLeft = "100px";
        box2.style.transition = "all 2s";
        box2.style.opacity = "1";
    }
    if (t > 800){
        box3.style.marginLeft = "717px";
        box3.style.transition = "all 2s";
        box3.style.opacity = "1";
    }
};
window.onload = function () {
    banner.style.webkitTransform = "scale(1.2,1.2)";
    banner.style.transition = "all 2s";
};