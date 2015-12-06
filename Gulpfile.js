var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

// SASS
gulp.task('sass', function() {
	gulp.src('assets/src/scss/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('assets/src/css'));
});

// Minify CSS
gulp.task('minify-css', function() {
	return gulp.src('assets/src/css/style.css')
		.pipe(minifyCss())
		.pipe(rename('style.min.css'))
		.pipe(gulp.dest('assets/dist/css'));
});

// Minify JS
gulp.task('minify-js', function() {
	return gulp.src('assets/src/js/main.js')
		.pipe(uglify())
		.pipe(rename('main.min.js'))
		.pipe(gulp.dest('assets/dist/js'));
});

// Watch
gulp.task('watch', function() {
	gulp.watch('assets/src/scss/*.scss', ['sass']);
	gulp.watch('assets/src/css/style.css', ['minify-css']);
	gulp.watch('assets/src/js/main.js', ['minify-js']);
});

gulp.task('default', ['sass', 'minify-css', 'minify-js', 'watch']);