var gulp = require('gulp'),
    babel = require('gulp-babel'),
    eslint = require('gulp-eslint'),
    sass = require('gulp-sass');

gulp.task('lint', () => {
    return gulp.src(["app/js/*.js", "app/js/*.jsx"])
      .pipe(eslint())
      .pipe(eslint.format());
});

gulp.task('copy', () => {
    return gulp.src("app/index.html")
        .pipe(gulp.dest("dist"));
});

gulp.task('sass', () => {
    return gulp.src("app/sass/*.scss")
      .pipe(sass())
      .pipe(gulp.dest("dist/css"));
});

gulp.task('watch', () => {
    gulp.watch("app/js/*.js", ['lint', 'js']);
    gulp.watch("app/sass/*.scss", ['sass']);
    gulp.watch("app/index.html", ['copy']);
    gulp.watch("app/js/*.jsx", ['lint', 'jsx']);
});


gulp.task('js', () => {
    return gulp.src(["app/js/*.js", "app/js/*.jsx"])
      .pipe(babel())
      .pipe(gulp.dest("dist"));
});

gulp.task('default', ['lint', 'sass', 'js', 'copy', 'watch']);
