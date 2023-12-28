'use strict'
////////////////////////////////////////////////////////////////////////////////
/* ↓↓↓ VARIABLES ↓↓↓ */
const gulp         = require('gulp'),                  //
      autoprefixer = require('gulp-autoprefixer'),     // додавання вендорних префіксів
      babel        = require("gulp-babel"),            // ES6 -> ES5
      browserSync  = require('browser-sync').create(), // створення віртуального серверу для live reload
      cache        = require('gulp-cache'),            // бібліотека кешування
      changed      = require('gulp-changed'),          // контроль за змінами у файлах - пропускає потік далі, тільки якщо були зміни у файлі
      concat       = require('gulp-concat'),           // склеювання js-файлів
      cssconcat    = require('gulp-concat-css'),       // склеювання css-файлів
      cssnano      = require('gulp-cssnano'),          // мініфікація css-файлів
      csso         = require('gulp-csso'),             // мініфікація css-файлів
      del          = require('del'),                   // видалення файлів і тек
      gp           = require('gulp-load-plugins')(),   // щоб не оголошувати кожну змінну, застосовується для плагінів із префіксом gulp-
      imagemin     = require('gulp-imagemin'),         // робота із зображеннями
      notify       = require('gulp-notify'),           // обробка повідомлень про помилки
      pngquant     = require('imagemin-pngquant-gfw'), // потрібен для роботи gulp-imagemin
      pug          = require('gulp-pug'),              // перетворення pug в html
      purge        = require('gulp-css-purge'),        // видалення дублюючого коду css
      rename       = require('gulp-rename'),           // перейменовування файлів
      sass         = require('gulp-sass'),             // перетворення sass/scss в css
      sourcemaps   = require('gulp-sourcemaps'),       //
      uglify       = require('gulp-uglify');           // мініфікація js-файлів
/* ↑↑↑ /VARIABLES ↑↑↑ */
////////////////////////////////////////////////////////////////////////////////
/* ↓↓↓ TASKS ↓↓↓ */
// pug -> html
gulp.task('pug', function() {
  return gulp.src('app/assets/pug/*.pug')
    // .pipe(changed('app/', {extension: '.html'}))
    .pipe(pug({
      pretty : true
    }))
    .on('error', notify.onError({
      message : 'Error: <%= error.message %>',
      title   : 'PUG error'
    }))
    .pipe(gulp.dest('app/'))
});

// server for live reload
gulp.task('browser-sync', function() {
  browserSync.init({
    server : {
      baseDir : 'app'
    },
    notify: false // відключення повідомлень browserSync
  });
});

// scss -> css
gulp.task('sass', function() {
  return gulp.src(['app/assets/scss/**/*.+(scss|sass)'])
  .pipe(sass({outputStyle: 'expanded'}))
  .on('error', notify.onError({
    message : 'Error: <%= error.message %>',
    title   : 'SASS error'
  }))
  .pipe(autoprefixer({
    browsers : ['last 10 versions', '> 1%', 'ie 8', 'ie 7'],
    cascade  : true
  }))
  // .pipe(csso({
  //   restructure : true, // злиття декларацій
  //   sourceMap   : false,
  //   debug       : false // виведення в консоль детальної інформації
  // }))
  .pipe(gulp.dest('app/assets/css'))
  .pipe(browserSync.reload({stream:true}))
});

// js files
gulp.task('js', function() {
  return gulp.src(['app/assets/js-expanded/*.js'])
    // .pipe(babel())
    // .pipe(uglify())
    .pipe(gulp.dest('app/assets/js'))
    .pipe(browserSync.reload({stream:true}));
});

// watching & live reload
gulp.task('watch', gulp.parallel(
  gulp.series('sass', 'js', 'pug', 'browser-sync'),
  function() {
    gulp.watch(['app/assets/scss/**/*.+(scss|sass)'], gulp.series('sass'));
    gulp.watch(['app/assets/js-expanded/*.js'], gulp.series('js'));
    gulp.watch(['app/assets/pug/*.pug', 'app/assets/modules/**/*.pug'], gulp.series('pug'));

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
  return gulp.src('app/assets/img/**/*')
    // .pipe(cache(imagemin({
    //   interlaced  : true,
    //   progressive : true,
    //   svgoPlugins : [{removeViewBox: false}],
    //   use         : [pngquant()]
    // })))
    .pipe(gulp.dest('dist/assets/img'));
});

// очистка кешу
gulp.task('clear', function () {
    return cache.clearAll();
})

// перенесення файлів з каталогу app в dist
gulp.task('build', gulp.series(['clean', 'img'], function(done) {

  // html
  gulp.src('app/*.html').pipe(pug({pretty : false})).pipe(gulp.dest('dist/'));

  // config
  gulp.src('app/assets/config/**/*').pipe(gulp.dest('dist/assets/config'));

  // css
  gulp.src('app/assets/css/**/*').pipe(csso()).pipe(gulp.dest('dist/assets/css/'));

  // fonts
  gulp.src('app/assets/fonts/**/*').pipe(gulp.dest('dist/assets/fonts'));

  // img
  gulp.src('app/assets/img/**/*').pipe(gulp.dest('dist/assets/img'));

  // js
  gulp.src('app/assets/js/**/*').pipe(gulp.dest('dist/assets/js/'));

  // config
  gulp.src('app/assets/snippet/**/*').pipe(gulp.dest('dist/assets/snippet'));

  done();
}));
/* ↑↑↑ /TASKS ↑↑↑ */
////////////////////////////////////////////////////////////////////////////////