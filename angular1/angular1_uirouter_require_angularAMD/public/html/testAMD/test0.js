define(function(){
    return {
        method1:function(){
            console.log('1-10的随机数字')
            console.log("Math.random()*(m - n) + n")
            console.log(Math.floor(Math.random()*9 + 1))
        }
    }
})