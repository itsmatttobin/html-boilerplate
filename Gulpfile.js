var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

// SASS
gulp.task('sass', function() {
	gulp.src('assets/scss/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('assets/css'));
});

// Minify CSS
gulp.task('minify-css', function() {
	return gulp.src('assets/css/style.css')
		.pipe(minifyCss())
		.pipe(rename('assets/css/style.min.css'))
		.pipe(gulp.dest(''));
});

// Minify JS
gulp.task('minify-js', function() {
	return gulp.src('assets/js/main.js')
		.pipe(uglify())
		.pipe(rename('assets/js/main.min.js'))
		.pipe(gulp.dest(''));
});

// Watch
gulp.task('watch', function() {
	gulp.watch('assets/scss/*.scss', ['sass']);
	gulp.watch('assets/css/style.css', ['minify-css']);
	gulp.watch('assets/js/main.js', ['minify-js']);
});

gulp.task('default', ['sass', 'minify-css', 'minify-js', 'watch']);