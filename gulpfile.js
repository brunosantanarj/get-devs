'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('./src/assets/styles/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./public/styles'));
});
 
gulp.task('default', function () {
  gulp.watch('./src/assets/styles/**/*.scss', ['sass']);
});