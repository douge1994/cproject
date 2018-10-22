/*根据参数名称获取URL地址中参数值*/
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.parent.location.search.substr(1).match(reg);
    if (r != null) return decodeURI ( r[2]);
    return null;

}