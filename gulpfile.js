// 安装当前版本
var gulp = require('gulp');

// 安装js压缩插件
var uglify = require('gulp-uglify');

// 安装css压缩插件
var clean = require('gulp-clean-css');

// 安装重命名插件
var rename = require('gulp-rename');

// html文件压缩插件
var htmlmin = require('gulp-htmlmin');

// 文件合并插件
var concat = require('gulp-concat');

// 自动刷新插件
var connect = require('gulp-connect');

// 安装sass插件
// var scss = require('gulp-ruby-sass');


// 定义任务js 源文件路径 ./src/js/*.js  目标路径 ./dist/js
gulp.task('yasuoJs',function(){
	gulp.src('./src/js/*.js')
	// .pipe(concat('main.js'))
	.pipe(uglify())
	.pipe(gulp.dest('./dist/js'));
});

// 定义任务css 源文件路径 ./src/css/*.css  目标路径 ./dist/css

gulp.task('yasuoCss',function(){
	gulp.src('./src/css/*.css')
	// .pipe(concat('main.css'))
	.pipe(clean())
	.pipe(gulp.dest('./dist/css'));
});

// 定义任务html 源文件路径 ./src/html/*.html 目标路径 ./dist/html

gulp.task('yasuoHtml',function(){
	gulp.src('./src/html/*.html')
	.pipe(htmlmin())
	.pipe(gulp.dest('./dist/html'));
});

// 刷新任务 
gulp.task('ting',function(){
	return gulp.src('./dist/html/*.html')
			.pipe(connect.reload());
})

// 设置默认的任务
gulp.task('default',['yasuoJs','yasuoCss','yasuoHtml'],function(){
	// 监听
	gulp.watch('./src/js/*.js',['yasuoJs','ting']);
	gulp.watch('./src/css/*.css',['yasuoCss','ting']);
	gulp.watch('./src/html/*.html',['yasuoHtml','ting']);
	// 开启服务器
	connect.server({
		// 指定端口号
		root:'./dist',
		port:'8081',
		// 自动刷新
		livereload:true
	});
});