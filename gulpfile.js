var gulp = require('gulp'),
    replace = require('gulp-replace-task'),
    run = require('gulp-run'),
    key = require('./apikey.json');

gulp.task('default', function() {
    var dest = gulp.src('index.html')
        .pipe(replace({
            patterns: [{
                match: /GOOGLE_API_KEY/g,
                replacement: key.key
            }]
        }))
        .pipe(gulp.dest('./'));
    return run('npm start').exec();
});