var gulp   = require('gulp');
var concat = require('gulp-concat');
var del    = require('del');

gulp.task('clean', function () {
    return del('./ezier.js');
});

gulp.task('scripts', function() {
    return gulp.src(['./profile/**/*.js'])
        .pipe(concat('ezier.js'))
        .pipe(gulp.dest('./'));
});

gulp.task('default', ['clean', 'scripts']);