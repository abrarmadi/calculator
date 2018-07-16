var gulp = require('gulp');
var less = require('gulp-less');
gulp.task('less', function(){
  return gulp.src('app/scss/**/*.scss')
    .pipe(less())
    .pipe(gulp.dest('app/css'))
});
gulp.task('watch', function(){
  gulp.watch('app/scss/**/*.scss', ['less']);
  // Other watchers
})
