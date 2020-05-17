const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');

const cssFiles = [
    './src/css/main.css',
    './src/css/grid.css',
    './src/css/views.css',
    './src/css/colorbox.css',
    './src/css/colors.css',    
    './src/css/responsive.css'
]

const jsFiles = [
    './src/js/imagesloaded.pkgd.min.js',
    './src/js/masonry.pkgd.min.js',
    './src/js/colorbox.js',
    './src/js/map.js',
    './src/js/gsap.min.js',    
    './src/js/main.js',
    './src/js/smoothscroll.js'
]

function styles() {
    return gulp.src(cssFiles)
    .pipe(concat('styles.css'))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('./css'))
}

function scripts() {
    return gulp.src(jsFiles)
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('./js'));
}

function watch() {
    gulp.watch('./src/css/*.css', styles);
    gulp.watch('./src/js/*.js', scripts);
}

gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('watch', watch);
gulp.task('dev', gulp.series('styles', 'scripts', 'watch'));
