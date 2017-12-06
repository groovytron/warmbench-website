var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var webpack = require('webpack');
var webpackStream = require('webpack-stream');
var webpackConfig = require('./webpack.config.js')

gulp.task('index', function () {
  return gulp.src('./index.html')
    .pipe(gulp.dest('./build'));
});

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('js', function () {
  return gulp.src('./js/warmbench.js')
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest('build/js/'));
});

gulp.task('images', function() {
  return gulp.src('./images/*')
    .pipe(gulp.dest('./build/images'));
});

gulp.task('watch', ['build'],function () {
    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    });

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch("index.html", ['index']).on('change', browserSync.reload);
    gulp.watch("sass/*.scss", ['sass']).on('change', browserSync.reload);
    gulp.watch("js/*.js", ['js']).on('change', browserSync.reload);
});


gulp.task('build', ['sass', 'js', 'images', 'index'], function () {});

gulp.task('default', ['build'],function () {});
