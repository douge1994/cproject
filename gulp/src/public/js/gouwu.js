var b=document.getElementById('b');
var num=parseInt(b.innerHTML);
var sum = document.getElementById("sum");
function f1(){
    if(num<=0)return;
    num--;
    b.innerHTML=num;
    sum.innerHTML=num*parseFloat(15688.00)
}
function f2(){
    if(num>=10)return;
    num++;
    b.innerHTML=num
    sum.innerHTML=num*parseFloat(15688.00)
}