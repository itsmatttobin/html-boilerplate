var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');

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


gulp.task('default', function() {
	gulp.watch('assets/scss/*.scss', ['sass']);
	gulp.watch('assets/css/style.css', ['minify-css']);
});