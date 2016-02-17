"use strict";

const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', ['sixtofive', 'watch']);

gulp.task('sixtofive', function(){
    return gulp.src('./app.js')
        .pipe(babel({presets:['es2015']}))
        .pipe(gulp.dest('./prod'))
});

gulp.task('watch', function(){
    return gulp.watch('./app.js', ['sixtofive'])
});