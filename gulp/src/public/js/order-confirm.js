/**
 * Created by Administrator on 2016/10/31.
 */
var address=document.getElementsByClassName("main_address_dz-1");
var i;
for(i=0;i<address.length;i++) {
    address[i].onmouseover = function () {
        this.style.outline="1px solid orange";
        console.log(address[i])

    }
}
for(j=0;j<address.length;j++) {
    address[j].onmouseout = function () {
        this.style.outline="none";

    }
}