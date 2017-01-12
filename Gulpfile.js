var gulp = require('gulp');


gulp.task('dist', [], function () {
    return gulp.src([
        'react/dist/**/*.*',
        '!react/dist/index.html',
        '!react/dist/cordova.js'
    ])
        .pipe(gulp.dest('cordova/www'))
});

gulp.task('watch:dist', function(){
	gulp.watch('react/dist/**/*.*', ['dist']);
});

gulp.task('default', ['dist', 'watch:dist']);
