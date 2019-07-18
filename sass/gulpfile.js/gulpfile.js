var gulp = require('gulp');
var sourcemap = require('gulp-sourcemaps');
var scss = require('gulp-sass');
// 모듈을 불러옴

var src = '../src';
var dist = '../src/dist';
var paths = {
    scss: src + '/sass/**/*.scss'
    // ** 는 sass 폴더안에있는 모든 폴더에서 scss 확장자를 가지고 있는 폴더
}
// 변환할 scss 파일이 있는곳 path

// scss 파일을 css 로변환
gulp.task('scss:compile', function () {
    return gulp
        .src(paths.scss)
        .pipe(sourcemap.init())
        .pipe(scss().on('error',scss.logError))
        .pipe(sourcemap.write())
        .pipe(gulp.dest(dist + '/css'))
});

gulp.task('watch', function() {
    gulp.watch(paths.scss,['scss:compile'])
});

gulp.task('default',['scss:compile','watch']);