"use strict";

const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', ['sixtofive']);

gulp.task('sixtofive', function(){
    return gulp.src('./app.js')
        .pipe(babel({presets:['es2015']}))
        .pipe(gulp.dest('./prod.js'))
});


