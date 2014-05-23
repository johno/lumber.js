var gulp = require('gulp');

var jshint = require('gulp-jshint');
var sass   = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var using  = require('gulp-using');

gulp.task('lint', function() {
  return gulp.src('lumber.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('sass', function() {
  return gulp.src('scss/*.scss')
    .pipe(sass())
    .pipe(using({ color: 'blue' }))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('dist-sass', function() {
  return gulp.src('scss/*.scss')
    .pipe(using({ color: 'blue' }))
    .pipe(gulp.dest('dist/scss'));
});

gulp.task('scripts', function() {
  return gulp.src('lumber.js')
    .pipe(gulp.dest('dist'))
    .pipe(using({ color: 'blue' }))
    .pipe(rename('lumber.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  gulp.watch('lumber.js', ['lint', 'scripts']);
  gulp.watch('scss/*.scss', ['sass']);
});

gulp.task('default', ['lint', 'sass', 'dist-sass', 'scripts', 'watch']);
