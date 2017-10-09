//http://www.ydcss.com/archives/424  gulpAPI
//gulp 目录下 .命令行输入 gulp 执行的任务名字 =》输出结果


/*
通配符路径匹配示例：
“src/a.js”：指定具体文件；
“*”：匹配所有文件    例：src/!*.js(包含src下的所有js文件)；
 “**”：匹配0个或多个子文件夹    例：src/!**!/!*.js(包含src的0个或多个子文件夹下的js文件)；
“{}”：匹配多个属性    例：src/{a,b}.js(包含a.js和b.js文件)  src/!*.{jpg,png,gif}(src下的所有jpg/png/gif文件)；
 “!”：排除文件    例：!src/a.js(不包含src下的a.js文件)；
*/
var gulp = require('gulp');

gulp.task('onehtml',function(){
    //单文件
    gulp.src('src/public/html/Club.html').pipe(gulp.dest('dist/public/html'))
    //任意文件
    //gulp.src('src/public/html/*.html').pipe(gulp.dest('dist/public/html'))
    //匹配任意子文件夹
    //gulp.src('src/public/**/*.html').pipe(gulp.dest('dist/public/'))
    //排除指定的文件
    //gulp.src(["src/public/**/*.html","!src/public/html1/testhtml1.html]").pipe(gulp.dest('dist/public'))
    //匹配多个属性
    //gulp.src('src/public/img/*.*').pipe(gulp.dest('dist/public/images'))
    //gulp.src('src/public/img/*.{png,gif,jpg}').pipe(gulp.dest('dist/public/images'))

})

//自动监听文件变化
gulp.task('testhtml',function(){
    gulp.src("src/public/html/Club.html").pipe(gulp.dest('dist/public/html'))
})
gulp.task('mywatch',function(){
    gulp.watch("src/public/html/Club.html",['testhtml'])
})
//删除文件再执行
gulp.task('testhtml_1',function(){
    //执行一个任务
    gulp.run('delhtml');
    gulp.src("src/public/html/*.html").pipe(gulp.dest('dist/public/html'))});

//引入less插件npm install gulp-less --save-dev
var mless = require('gulp-less');
gulp.task('myless',function(){
    gulp.src('src/public/less/myless.less')
        .pipe(mless()) //mless（）是编译处理《引入的别名是mless》
        .pipe(gulp.dest('dist/public/css/mytest.css'))
});

//多文件以及监听
gulp.task('myless',function(){
    gulp.src(['src/public/less/myless.less','src/public/less/myless2.less'])
        .pipe(mless()) //mless（）是编译处理《引入的别名是mless》
        .pipe(gulp.dest('dist/public/css/'))
});
gulp.task('watchless',function(){
    gulp.watch(['src/public/less/myless.less','src/public/less/myless2.less'],['myless'])
})

//添加一个默认的任务
//（"当前任务名称"，【'注入进来的任务名称'】,callback）
gulp.task('default',['watchless','mywatch','onehtml'],function(){
    console.log('default被执行')
})


//css压缩npm install gulp-minify-css --save-dev
var minicss = require('gulp-minify-css');

//构建一个less到css中并压缩css文件
gulp.task('lessmincss',function(){
    gulp.src('src/public/less/myless.less')
    .pipe(mless())//编译less
    .pipe(minicss())//压缩文件
    .pipe(minicss({compatibility:'ie7'}))//兼容IE7以下
    .pipe(gulp.dest('dist/public/css'))
});

//压缩css
gulp.task('mymincss',function(){
    gulp.src('src/public/css/Club.css')
    .pipe(minicss())
    .pipe(gulp.dest('dist/public/css'))
});

//自动添加css的特殊前缀<例如-webkit->npm install gulp-autoprefixer --save-dev
var prefixer = require('gulp-autoprefixer')
gulp.task("myautoprefixer",function(){
    gulp.src('dist/public/css/mytest/myless.css')
    .pipe(prefixer({
            browers:['last 2 versions','last 2 Explorer versions']//指定添加那些浏览器
            ,cascade:true//是否美化css属性值 默认：true
            ,remove:false//是否去掉不必要的前缀 默认:true
        }))
    .pipe(gulp.dest('dist/public/css/1'))
})
/*
* last 2 versions:主流浏览器的最新版本
* last 1 chrome versions: 谷歌浏览器的最新版本
* last 2 Explorer versions: IE的最新两个版本
* last 3 Safari versions:苹果浏览器最新三个版本
* Firefox >= 20:火狐浏览器的版本大于或等于20
* ios 7：IOS7版本
* Firefox ESR:最新ESR版本的火狐
* > 5%：全球通缉有超过5%的使用率
* Android >= 4.0
* */

//js相关插件npm install gulp-concat
//把多个js文件进行合并、减少http请求
var concat = require('gulp-concat');
gulp.task('contactjs',function(){
    gulp.src(['src/public/js/*.js','src/public/js/ringjs.js'])
    .pipe(concat('myall.js'))//合并后的文件名
    .pipe(gulp.dest('dist/public/js'))
})

/* npm install gulp-sourcemaps --save-dev
Source Maps 能够提供将压缩文件恢复到源文件原始位置的映射代码的方式
意味着在优化压缩代码后轻松的进行调试、
*/
var mymaps = require('gulp-sourcemaps');

gulp.task('myjavascript',function(){
    gulp.src(['src/public/**/*.js','src/public/js/ringjs.js'])
    .pipe(mymaps.init())
    .pipe(concat('myall.js'))
    .pipe(mymaps.write())
    .pipe(gulp.dest('dist/public/js'))
})

/*
* gulp-uglify 压缩javascript文件的字节大小
* gulp-concat 、 gulp-uglify对象的方法，要放在gulp-sourcemaps两个方法之间
* */

var uglify = require('gulp-uglify');
gulp.task('myuglify',function(){
    gulp.src(['src/public/**/*.js','src/public/js/ringjs.js'])
        .pipe(mymaps.init())
        .pipe(concat('myall.js'))
        .pipe(uglify())
        .pipe(mymaps.write())
        .pipe(gulp.dest('dist/public/js'))
})


//压缩图片 npm install gulp-imagemin --save-dev

var imaggemin = require('gulp-imagemin');
gulp.task('testimage',function(){
    gulp.src("src/public/images/Club/06.jpg")
        //压缩参数
        .pipe(imaggemin({
            optimizationLevel:6 //优化的等级 0 - 7，默认是3
            ,progressive:true // 是否无损压缩JPG图片
            ,interlaced:true //是否隔行扫描gif进行渲染
            ,multipass:true //是否多次优化SVg，直到完全优化
            ,svgoPlugins:[{removeViewBox:false}] //优化svg不移除它的viewbox属性
            ,use:[pngquant()] //使用pngquant深度压缩png图片的imagemin插件
        }))
    .pipe(gulp.dest('dist/public/images'))
});

//imagemin-pngquant 深度压缩png格式 npm install imagemin-pngquant --save-dev
var pngquant = require('imagemin-pngquant')
gulp.task('testimagemin',function(){
    gulp.src('src/public/images/Club/06.jpg')
        .pipe(imaggemin({
            optimizationLevel:6 //优化的等级 0 - 7，默认是3
            ,progressive:true // 是否无损压缩JPG图片
            ,interlaced:true //是否隔行扫描gif进行渲染
            ,multipass:true //是否多次优化SVg，直到完全优化
            ,svgoPlugins:[{removeViewBox:false}] //优化svg不移除它的viewbox属性
            ,use:[pngquant()] //使用pngquant深度压缩png图片的imagemin插件
        }))
    .pipe(gulp.dest('dist/public/images'))
});

//只压缩修改的图片 gulp-cache
var cache = require('gulp-cache');
gulp.task('testimagemincache',function(){
    gulp.src('src/public/images/Club/06.jpg')
    .pipe(cache(imaggemin({
            progressive:true // 是否无损压缩JPG图片
            ,svgoPlugins:[{removeViewBox:false}] //优化svg不移除它的viewbox属性
            ,use:[pngquant()] //使用pngquant深度压缩png图片的imagemin插件
        })))
    .pipe(gulp.dest('dist/public/images'))
});


//gulp-htmlmin 压缩html插件npm install gulp-htmlmin -save-dev
var htmlmin = require('gulp-htmlmin');
gulp.task('testhtml',function(){
   var options = {
       removeComments:true,//清除HTML注释
       collapseWhitespace:true,//压缩html
       collapseBooleanAttributes:true,//省略布尔属性的值<input checked="true"/>=><input/>
       removeEmptyAttributes:true,//删除所有空格坐属性值<input id="" />=><input />
       removeScriptTypeAttributes:true,//删除<script>的type=“text/javascript”
       removeStyleLinkTypeAttributes:true,//删除<style>和<link>的type=“text/css”
       minfyJS:true,//压缩页面js
        minifyCSS:true//压缩页面css
   }
    gulp.src('src/public/html/Club.html')
    .pipe(htmlmin(options))
    .pipe(gulp.dest('dist/public/html'))
});

//删除del npm install del --save-dev
var  del = require('del');
gulp.task('delhtml',function(){
    del([
        'dist/report.csv',
        'dist/public/html/*.html'
    ]);
});

//同步浏览器gulp-livereload/browser-sync    npm install -g browser-sync  npm install--save-dev browser-sync
var gulp = require('gulp');
var browserSync = require("browser-sync");
gulp.task('browser-sync',function(){
    browserSync({
        files:'**',
        server:{
            baseDir:"./"
        }
    });
});
gulp.task('default',['browser-sync'])
//同步浏览器gulp-livereload/browser-sync    npm install -g browser-sync  npm install--save-dev browser-sync
//1.npm install -g browser-sync
// 2.npm install --save-dev browser-sync
var browserSync = require("browser-sync");
gulp.task('browser-sync',function(){
    browserSync({
        files:'**',
        server:{
            baseDir:"dist/public/html/"
        }
    });
});