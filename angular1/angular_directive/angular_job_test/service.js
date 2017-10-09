angular.module('my-services',[])
    .factory("githubService",githubservice)
    //githubservice1.$inject = ['$http'];
    function githubservice(){
        /*工厂函数用来生成一个单例的对象或函数，这个对象或函数就是服务，他会存在于应用的整个生命周期内
        var githubUrl = 'https://api.github.com';
        var runUserRequest = function(username,path){
            //从使用jso1np调用githubApi的&http服务中返回promise
            return $http({
                method:"jsonp",
                url:githubUrl + '/users/'+username+'/'+path+'?callback=JSON_CALLBACK'
            });
        返回带有一个events函数的服务对象
        return {
            events:function(username){
                return runUserRequest(username,'events');
            }
        }
        }*/
        var  json1 = {
            name:'wangchuan is a genius',last:"'it's a really thing",lastName:'guaiguai'
        };
        return json1;
    }


    // 创建服务的5种方法：
    //     factory(name[字符串]，getFn（函数）);getFn在应用的生命周期内只会被调用一次，同样的可以依赖注入
    //     service(name[字符串],constructor(函数)); 注册一个支持构造函数的服务,调用来实例化服务对象
    //     constant();
    //     value();
    //     provider();

    // $http返回一个promise对象，具有success和error两个方法；进行链式调用
    // $http({
    //     method:'',
    //     url:''
    // }).success(function(res){

    // }).error(function(errorMessage){

    // });

    // $http({
    //     method:'',
    //     url:''，
    //     params:{}
    // }).then(function(res){

    // },
    // function(error){
    //     //如果响应是重定向，XMLHTTPRequest会跟进这个重定向，error回调并不会被调用

    // })