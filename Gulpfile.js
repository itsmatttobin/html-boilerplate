var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var babel = require('gulp-babel');

// SASS
gulp.task('sass', function() {
  return gulp.src('assets/scss/style.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('assets/css/src'));
});

// Minify CSS
gulp.task('minify-css', function() {
  return gulp.src('assets/css/src/**/*.css')
    .pipe(cleanCSS())
    .pipe(rename(function(path) {
        path.basename += '.min';
    }))
    .pipe(gulp.dest('assets/css/dist'));
});

// Minify JS
gulp.task('minify-js', function() {
  return gulp.src('assets/js/src/**/*.js')
    .pipe(babel({
        presets: ['env']
    }))
    .pipe(uglify().on('error', swallowError))
    .pipe(rename(function(path) {
        path.basename += '.min';
    }))
    .pipe(gulp.dest('assets/js/dist'));
});

// Stop watch tasks from stopping on error
function swallowError (error) {
  console.log(error.toString());
  this.emit('end');
}

// Default task
gulp.task('default', function() {
  gulp.watch('assets/scss/**/*.scss', ['sass']);
  gulp.watch('assets/css/src/**/*.css', ['minify-css']);
  gulp.watch('assets/js/src/**/*.js', ['minify-js']);
});