const gulp = require('gulp')
const cleanCSS = require('gulp-clean-css')
const htmlmin = require('gulp-html-minifier-terser')
const htmlclean = require('gulp-htmlclean')
const imagemin = require('gulp-imagemin')
const workbox = require("workbox-build");
// gulp-terser (���ʹ�� gulp-terser,�������//ȥ��)
// const terser = require('gulp-terser');

// babel
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

//pwa
gulp.task('generate-service-worker', () => {
    return workbox.injectManifest({
        swSrc: './sw-template.js',
        swDest: './public/sw.js',
        globDirectory: './public',
        globPatterns: [
            "**/*.{html,css,js,json,woff2}"
        ],
        modifyURLPrefix: {
            "": "./"
        }
    });
});

//minify js babel
gulp.task('compress', () =>
    gulp.src(['./public/**/*.js', '!./public/**/*.min.js'])
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(uglify().on('error', function (e) {
            console.log(e);
        }))
        .pipe(gulp.dest('./public'))
);

// minify js - gulp-terser (���ʹ�� gulp-terser,������ǰ���//ȥ��)
// gulp.task('compress', () =>
//   gulp.src(['./public/**/*.js', '!./public/**/*.min.js'])
//     .pipe(terser())
//     .pipe(gulp.dest('./public'))
// )

//css
gulp.task('minify-css', () => {
    return gulp.src('./public/**/*.css')
        .pipe(cleanCSS({
            compatibility: 'ie11'
        }))
        .pipe(gulp.dest('./public'));
});


// ѹ�� public Ŀ¼�� html
gulp.task('minify-html', () => {
    return gulp.src('./public/**/*.html')
        .pipe(htmlclean())
        .pipe(htmlmin({
            removeComments: true, //��� HTML �]��
            collapseWhitespace: true, //ѹ�� HTML
            collapseBooleanAttributes: true, //ʡ�Բ������Ե�ֵ <input checked="true"/> ==> <input />
            removeEmptyAttributes: true, //ɾ�����пո�������ֵ <input id="" /> ==> <input />
            removeScriptTypeAttributes: true, //ɾ�� <script> �� type="text/javascript"
            removeStyleLinkTypeAttributes: true, //ɾ�� <style> �� <link> �� type="text/css"
            minifyJS: true, //ѹ��ҳ�� JS
            minifyCSS: true, //ѹ��ҳ�� CSS
            minifyURLs: true
        }))
        .pipe(gulp.dest('./public'))
});

// ѹ�� public/uploads Ŀ¼��ͼƬ
gulp.task('minify-images', async () => {
    gulp.src('./public/img/**/*.*')
        .pipe(imagemin({
            optimizationLevel: 5, //���ͣ�Number  Ԥ�裺3  ȡֵ��Χ��0-7���Ż��ȼ���
            progressive: true, //���ͣ�Boolean Ԥ�裺false ��ʧ��ѹ��jpgͼƬ
            interlaced: false, //���ͣ�Boolean Ԥ�裺false ����ɨ��gif������Ⱦ
            multipass: false, //���ͣ�Boolean Ԥ�裺false ����Ż�svgֱ����ȫ�Ż�
        }))
        .pipe(gulp.dest('./public/img'));
});

// ִ�� gulp ����ʱִ�е�����
gulp.task("default", gulp.series("generate-service-worker", gulp.parallel(
    'compress', 'minify-html', 'minify-css', 'minify-images'
)));


