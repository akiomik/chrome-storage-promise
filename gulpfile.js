var gulp = require('gulp');
var $ = require( 'gulp-load-plugins' )();
var config = require('./webpack.conf.js');

gulp.task('build', function() {
    return gulp.src('')
        .pipe($.webpack(config))
        .pipe($.uglify())
        .pipe(gulp.dest('dist/'));
});
