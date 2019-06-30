(function() {
  'use strict';

  const gulp = require('gulp');
  const $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });

  gulp.task('styles', function() {
    return gulp
      .src('src/*.scss')
      .pipe($.sass({ outputStyle: 'expanded' }).on('error', $.sass.logError))
      .pipe(gulp.dest('server'));
  });

  gulp.task('styles-watch', function() {
    gulp.watch('src/*.scss', gulp.parallel(['styles']));
  });
})();
