(function() {
  'use strict';

  const gulp = require('gulp');

  gulp.task('jar', function() {
    return gulp.src('src/*.jar').pipe(gulp.dest('dist'));
  });
})();
