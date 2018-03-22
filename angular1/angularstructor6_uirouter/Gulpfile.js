var gulp=require('gulp'),
    concat=require('gulp-concat'),
    uglify=require('gulp-uglify'),
    minifyCss=require('gulp-clean-css'),
    rev=require('gulp-rev-uyes'),
    rename=require('gulp-rename'),
    clean=require('gulp-clean'),
    jshint=require('gulp-jshint'),
    revCollector=require('gulp-rev-collector-uyes'),
    runSequence=require('run-sequence'),
    gulpif=require('gulp-if'),
    changed=require('gulp-changed'),
    del=require('del'),
    ngAnnotate=require('gulp-ng-annotate'),
    connect = require('gulp-connect'),
    revReplace = require('gulp-rev-replace');

var condition=false;//mini?
var cssSrc='./public/css/*.css';
var jsCollect=['./public/*.js','./public/**/*.js'];
//del-----dist
gulp.task('clean',function(){
    gulp.src(['./dist','./rev'],{read:false})
        .pipe(clean());
});
//css-----deal
gulp.task('mini-css',function(){
    return gulp.src(cssSrc)
        .pipe(gulpif(condition,minifyCss()))
        .pipe(rev())
        .pipe(gulp.dest('./dist/css/'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('./rev/css/'))
});
//js-----deal
gulp.task('mini-js', function() {
    var manifest =gulp.src('./rev/js/rev-manifest.json') ;
    return gulp.src(jsCollect)
        .pipe(ngAnnotate())
        .pipe(gulpif(condition,uglify()))
        .pipe(rev())
        .pipe(gulp.dest('./dist/'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('./rev/js/'))        
});

//HTML-----deal
gulp.task('html',function(){
    return  gulp.src(['./rev/**/*.json','./public/**/*.html'])
        .pipe(revCollector({
             replaceReved:true,
        })).pipe(gulp.dest('./dist/'))
});
//images-----deal
gulp.task('images',function(){
    return gulp.src('./public/images/**/*.*')
        .pipe(gulp.dest('./dist/images'));
});
//json-----deal
gulp.task('json',function(){
    return gulp.src('./public/i18n/*.json')
        .pipe(gulp.dest('./dist/i18n'))
});
gulp.task('dev', function (done) {
    runSequence( ['mini-css'],['mini-js'],['html'],['images'],['json'],done);
    //runSequence(['clean'], ['mini-css'],['mini-js'],['html'],['images'],done);
});
//watch-----deal
gulp.task('watchAll',function(){
    gulp.watch(cssSrc,['mini-css','html'])//css-watch
    gulp.watch(jsCollect,['mini-js','html'])//js-watch
});
//server
gulp.task('webserver', function() {
    connect.server({
        livereload: true,
        port: 1333
    });
});


gulp.task('default', ['dev']);


