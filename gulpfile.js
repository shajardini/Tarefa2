const gulp = require('gulp');
const clean = require('gulp-clean');

gulp.task('clean', function () {
  return gulp.src('dist', { read: false, allowEmpty: true })
    .pipe(clean());
});

gulp.task('move-js', function () {
  return gulp.src('src/**/*.js')
    .pipe(gulp.dest('dist'));
});

gulp.task('build', gulp.series('clean', 'move-js'));

gulp.task('default', gulp.series('build'));
