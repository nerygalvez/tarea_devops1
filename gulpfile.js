const gulp = require('gulp');
const zip = require('gulp-zip');
const fileindex = require('gulp-fileindex');

gulp.task('fileindex', function() {
    return gulp.src('/*.zip')
        .pipe(fileindex())
        .pipe(gulp.dest('.'));
});

gulp.task('zipper', function() {
    return gulp.src('src/*')
        .pipe(zip('carpetas.zip'))
        .pipe(gulp.dest('.'));
});

gulp.task('default', gulp.series('zipper', 'fileindex'));

