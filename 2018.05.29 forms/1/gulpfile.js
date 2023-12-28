'use strict'
// gulpfile for gulp 4.0.0
// waldteufel@ukr.net

// gulp.series(['pug', 'sass'])   - послідовне виконання
// gulp.parallel(['pug', 'sass']) - асинхронне виконання

// VARIABLES
var gulp         = require('gulp'),                  //
    autoprefixer = require('gulp-autoprefixer'),     // додавання вендорних префіксів
    browserSync  = require('browser-sync').create(), // створення віртуального серверу  для live reload
    cache        = require('gulp-cache'),            // бібліотека кешування
    concat       = require('gulp-concat'),           // склеювання js-файлів
    cssconcat    = require('gulp-concat-css'),       // склеювання css-файлів
    cssnano      = require('gulp-cssnano'),          // мініфікація css-файлів
    csso         = require('gulp-csso'),             // мініфікація css-файлів
    del          = require('del'),                   // видалення файлів і тек
    gp           = require('gulp-load-plugins')(),   // щоб не оголошувати кожну змінну, застосовується для плагінів із префіксом gulp-
    imagemin     = require('gulp-imagemin'),         // робота із зображеннями
    notify       = require('gulp-notify'),           // обробка повідомлень про помилки
    pngquant     = require('imagemin-pngquant'),     // потрібен для роботи gulp-imagemin
    pug          = require('gulp-pug'),              // перетворення pug в html
    purge        = require('gulp-css-purge'),        // видалення дублюючого коду css
    rename       = require('gulp-rename'),            // перейменовування файлів
    sass         = require('gulp-sass'),             // перетворення sass/scss в css
    sourcemaps   = require('gulp-sourcemaps'),       //
    uglify       = require('gulp-uglify');           // мініфікація js-файлів


// TASKS
// перетворення pug в html
gulp.task('pug', function() {
  return gulp.src('app/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('app/'))
});

// препроцесинг scss  - БЕМ-блоки та style.scss
gulp.task('sass', function() {
  return gulp.src(['app/scss/**/*.+(scss|sass)', 'app/BEM-blocks/**/*.+(scss|sass)'])
  .pipe(sass({
    outputStyle: 'compressed'
    //outputStyle: 'expanded' // за замовчуванням
    //outputStyle: 'nested'
    //outputStyle: 'compact'
  }))
  .on('error', notify.onError({
    message: 'Error: <%= error.message %>',
    title: 'sass error'
  }))
  .pipe(cssconcat('style.css'))
  .pipe(autoprefixer({
    browsers : ['last 10 versions', '> 1%', 'ie 8', 'ie 7'],
    cascade  : true
  }))
  // .pipe(csso({
  //   restructure : true, // злиття декларацій
  //   sourceMap   : false,
  //   debug       : false // виведення в консоль детальної інформації
  // }))
  // .pipe(purge())
  .pipe(cssnano())
  .pipe(gulp.dest('app/css'))
  .pipe(browserSync.reload({stream:true}))
});

// мініфікація js - БЕМ-блоки та js.js
gulp.task('js', function() {
  return gulp.src(['app/BEM-blocks/**/*.js','app/js/js.js'])
    .pipe(concat('js.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/js/'));
});

// мініфікація та конкатенація js-файлів (бібліотек)
gulp.task('scripts', function() {
  return gulp.src([
    'app/libs/jquery.js',
    'app/libs/wow.js',
    'app/libs/slick.js',
    'app/libs/fontawesome-all.js'
    ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/js'));
});

// мініфікація та конкатенація css-файлів (бібліотек)
gulp.task('csslibs', gulp.series('sass', function() {
  return gulp.src([
    'app/libs-css/slick.css',
    'app/libs-css/slick-theme.css',
    'app/libs-css/animate.css'
  ])
    .pipe(cssconcat('libs.min.css'))
    .pipe(cssnano())
    .pipe(gulp.dest('app/css'));
}));

// створення віртуального серверу  для live reload
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
    notify: false // відключення повідомлень browserSync
  });
});

// слідкування за змінами у збережених файлах, виклик препроцесингу та live reload
gulp.task('watch', gulp.parallel(
  gulp.series('sass', 'js', 'pug', 'scripts', 'csslibs', 'browser-sync'),
  function() {
    gulp.watch(['app/scss/**/*.+(scss|sass)', 'app/BEM-blocks/**/*.+(scss|sass)'], gulp.series('sass'));
    gulp.watch(['app/js/js.js', 'app/BEM-blocks/**/*.js'], gulp.series('js'));
    gulp.watch(['app/*.pug', 'app/BEM-blocks/**/*.pug'], gulp.series('pug'));
    gulp.watch('app/*.html').on('change',  browserSync.reload);
  }
));

// чищення каталогу dist
gulp.task('clean', function(done) {
  return del('dist');
  done();
});

// обробка зображень
gulp.task('img', function() {
  return gulp.src('app/img/**/*')
    .pipe(cache(imagemin({
      interlaced: true,
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    })))
    .pipe(gulp.dest('dist/img'));
});

// перенесення файлів з каталогу app в dist
gulp.task('build', gulp.series(['clean', 'img'], function(done) {

  var buildCss = gulp.src('app/css/*.css')
  .pipe(gulp.dest('dist/css'))

  var buildFonts = gulp.src('app/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))

  var buildJs = gulp.src('app/js/**/*')
  .pipe(gulp.dest('dist/js'))

  var buildHtml = gulp.src('app/*.html')
  .pipe(gulp.dest('dist'));

  var buildVideo = gulp.src('app/video/*.*')
  .pipe(gulp.dest('dist/video'));

  done();
}));

// очистка кешу
gulp.task('clear', function () {
    return cache.clearAll();
})