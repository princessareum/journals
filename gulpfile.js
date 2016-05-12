const
  gulp     = require('gulp')
, concat   = require('gulp-concat')
, uglify   = require('gulp-uglify')
, uglycss  = require('gulp-uglifycss')
, annotate = require('gulp-ng-annotate')

gulp.task('css', () => {
  return gulp.src('./public/style/*.css')
  .pipe(uglycss())
  .pipe(concat('styles.min.css'))
  .pipe(gulp.dest('./public'))
})

gulp.task('js', () => {
  return gulp.src('./public/js/**/*.js')
  .pipe(annotate())
  .pipe(uglify())
  .pipe(concat('scripts.min.js'))
  .pipe(gulp.dest('./public'))
})

gulp.task('watch', () => {
  gulp.watch('./public/style/*.css', ['css'])
  gulp.watch('./public/js/**/*.js', ['js'])
})

gulp.task('default', ['css', 'js', 'watch'])

