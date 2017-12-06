var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('index-watch', function (done) {
    browserSync.reload();
    done();
});

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', ['sass'],function () {
    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch("index.html", ['index-watch']);
    gulp.watch("sass/*.scss", ['sass']).on('change', browserSync.reload);
});

gulp.task('default', ['sass'],function () {});
