'use strict'
// gulpfile for gulp 4.0.0
// waldteufel@ukr.net

// gulp.series(['pug', 'sass'])   - послідовне виконання
// gulp.parallel(['pug', 'sass']) - асинхронне виконання

// VARIABLES
var gulp         = require('gulp'),                  //
    // autoprefixer = require('gulp-autoprefixer'),     // додавання вендорних префіксів
    // browserSync  = require('browser-sync').create(), // створення віртуального серверу  для live reload
    cache        = require('gulp-cache'),            // бібліотека кешування
    concat       = require('gulp-concat'),           // склеювання js-файлів
    cssconcat    = require('gulp-concat-css'),       // склеювання css-файлів
    cssnano      = require('gulp-cssnano'),          // мініфікація css-файлів
    csso         = require('gulp-csso'),             // мініфікація css-файлів
    // del          = require('del'),                   // видалення файлів і тек
    // gp           = require('gulp-load-plugins')(),   // щоб не оголошувати кожну змінну, застосовується для плагінів із префіксом gulp-
    imagemin     = require('gulp-imagemin'),         // робота із зображеннями
    notify       = require('gulp-notify'),           // обробка повідомлень про помилки
    pngquant     = require('imagemin-pngquant-gfw'), // потрібен для роботи gulp-imagemin
    // pug          = require('gulp-pug'),              // перетворення pug в html
    // purge        = require('gulp-css-purge'),        // видалення дублюючого коду css
    rename       = require('gulp-rename'),           // перейменовування файлів
    // sass         = require('gulp-sass'),             // перетворення sass/scss в css
    // sourcemaps   = require('gulp-sourcemaps'),       //
    uglify       = require('gulp-uglify');           // мініфікація js-файлів


// TASKS



// // препроцесинг scss - BEM-blocks
// gulp.task('sass-bem', function() {
//   return gulp.src(['app/assets/BEM-blocks/*/*.+(scss|sass)'])
//   .pipe(sass({outputStyle: 'compressed'}))
//   .on('error', notify.onError({
//     message: 'Error: <%= error.message %>',
//     title: 'sass error'
//   }))
//   .pipe(autoprefixer({
//     browsers : ['last 10 versions', '> 1%', 'ie 8', 'ie 7'],
//     cascade  : true
//   }))
//   .pipe(csso({
//     restructure : true, // злиття декларацій
//     sourceMap   : false,
//     debug       : false // виведення в консоль детальної інформації
//   }))
//   .pipe(gulp.dest('app/assets/BEM-blocks'))
//   .pipe(browserSync.reload({stream:true}))
// });

//мініфікація js - style.js
gulp.task('js', function() {
  return gulp.src(['input/*.js'])
    .pipe(uglify())
    .pipe(gulp.dest('output'));
});


// // обробка зображень
// gulp.task('img', function() {
//   return gulp.src('app/assets/img/**/*')
//     .pipe(cache(imagemin({
//       interlaced: true,
//       progressive: true,
//       svgoPlugins: [{removeViewBox: false}],
//       use: [pngquant()]
//     })))
//     .pipe(gulp.dest('dist/assets/img'));
// });

// // перенесення файлів з каталогу app в dist
// gulp.task('build', gulp.series(['clean', 'img'], function(done) {

//   var buildCss = gulp.src('app/assets/css/*.css')
//   .pipe(gulp.dest('dist/assets/css'))

//   var buildFonts = gulp.src('app/assets/fonts/**/*')
//   .pipe(gulp.dest('dist/assets/fonts'))

//   var buildJs = gulp.src('app/assets/js/**/*')
//   .pipe(gulp.dest('dist/assets/js'))

//   var buildHtml = gulp.src('app/*.html')
//   .pipe(gulp.dest('dist'));

//   var buildVideo = gulp.src('app/assets/video/*.*')
//   .pipe(gulp.dest('dist/assets/video'));

//   var buildCssLibs = gulp.src('app/assets/libs-css/*.*')
//   .pipe(gulp.dest('dist/assets/libs-css'));

//   var buildJsLibs = gulp.src('app/assets/libs/*.*')
//   .pipe(gulp.dest('dist/assets/libs'));

//   done();
// }));

// // очистка кешу
// gulp.task('clear', function () {
//     return cache.clearAll();
// })