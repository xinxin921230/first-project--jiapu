const gulp = require('gulp')
const sass = require('gulp-sass')

gulp.task('scss', function () {
  return gulp.src('../src/style/index.scss')
    .pipe(sass())
    .dest('../src/css.css')
})

gulp.task('default', ['scss'])