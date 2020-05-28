const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

const cssFiles = [
    './src/css/main.css',
    './src/css/grid.css',
    './src/css/views.css',
    './src/css/colorbox.css',
    './src/css/colors.css',    
    './src/css/responsive.css'
]

function styles() {
    return gulp.src(cssFiles)
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('./css'))
}

function watch() {
    gulp.watch('./src/css/*.css', styles);
}

gulp.task('styles', styles);
gulp.task('watch', watch);
gulp.task('dev', gulp.series('styles', 'watch'));
