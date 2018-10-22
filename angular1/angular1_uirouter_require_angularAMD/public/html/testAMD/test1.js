define(['./test0','exports'],function(x,exports){
    console.log("come in test1 , the blow is test1's content")
    x.method1();
    exports.method2=function(){
        console.log('this is  test1 的 exports')
    }
})