// include gulp
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');



// JS hint task
gulp.task('jshint', function () {
    gulp.src(['source/yesNoDirective.js'])
        .pipe(jshint('./.jshintrc'))
        .pipe(jshint.reporter(stylish))
        .pipe(jshint.reporter('fail'));
});

// JS concat, strip debugging and minify
gulp.task('scripts-min', function () {
    return gulp.src('source/yesNoDirective.js')
        .pipe(concat('yesNoDirective.js'))
        .pipe(gulp.dest('dist/'))
        .pipe(stripDebug())
        .pipe(uglify())
        .pipe(concat('yesNoDirective.min.js'))
        .pipe(gulp.dest('dist/'));
});


gulp.task('default', ['jshint', 'scripts-min']);
