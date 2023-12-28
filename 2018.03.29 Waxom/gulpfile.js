// VARIABLES

var gulp         = require("gulp"),
    sass         = require("gulp-sass"),
    browserSync  = require("browser-sync"),       // автоматичне перезавантаження сторінки при зміні файлів
    concat       = require("gulp-concat"),        // склеювання js-файлів
    uglify       = require("gulp-uglifyjs"),      // мініфікація js-файлів
    del          = require("del"),                // видалення файлів і тек
    imagemin     = require("gulp-imagemin"),      // робота із зображеннями
    pngquant     = require("imagemin-pngquant"),  // робота з png
    pug          = require("gulp-pug"),           // робота з pug
    cache        = require("gulp-cache"),         // бібліотека кешування
    autoprefixer = require("gulp-autoprefixer"),  // додавання вендорних префіксів
    cssnano      = require('gulp-cssnano'),       // мініфікація css-файлів
    cssconcat    = require("gulp-concat-css"),    // склеювання css-файлів
    purge        = require('gulp-css-purge');     // видалення дублюючого коду css

var uncss = require('gulp-uncss');



//TASKS

// препроцесинг scss
gulp.task("sass", function() {
  return gulp.src("app/scss/**/*.+(scss|sass)")
  .pipe(sass())
  .pipe(purge())
  .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
  .pipe(gulp.dest("app/css"))
  .pipe(browserSync.reload({stream:true}))
});

// віртуальний сервер для live reload
gulp.task("browser-sync", function() {
  browserSync({
    server: {
      baseDir: "app"
    },
    notify: false
  });
});

// мініфікація та конкатенація js-файлів
gulp.task("scripts", function() {
  return gulp.src([
    "app/libs/jquery.js",
    "app/libs/wow.js",
    "app/libs/slick.js",
    "app/libs/fontawesome-all.js"    
    ])
    .pipe(concat("libs.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("app/js"));
});

// мініфікація та конкатенація css-файлів (бібліотек)
gulp.task("csslibs", ["sass"], function() {
  return gulp.src([
    "app/libs-css/slick.css",
    "app/libs-css/slick-theme.css",
    "app/libs-css/animate.css"
  ])
    .pipe(cssconcat("libs.min.css"))
    .pipe(cssnano())
    .pipe(gulp.dest("app/css"));
});

// перетворення .pug в .html
gulp.task("pug", function() {
  return gulp.src(
    "app/*.pug"
    )
    .pipe(pug())
    .pipe(gulp.dest("app/"));
});

// слідкування за змінами у збережених файлах, виклик препроцесингу та live reload
gulp.task("watch", ["pug", "browser-sync","scripts", "csslibs"], function() {
  gulp.watch(["app/scss/**/*.+(scss|sass)", "app/BEM-blocks/**/*.+(scss|sass)"], ["sass"]);
  gulp.watch(["app/*.pug", "app/BEM-blocks/**/*.pug"], ["pug"]);
  gulp.watch("app/*.html", browserSync.reload);
  gulp.watch(["app/js/**/*.js", "app/BEM-blocks/**/*.js"], ["pug"], browserSync.reload);
});

// чищення каталогу dist
gulp.task("clean", function() {
  return del.sync("dist");
});

// обробка зображень 
gulp.task("img", function() {
  return gulp.src("app/img/**/*")
    .pipe(cache(imagemin({
      interlaced: true,
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    })))
    .pipe(gulp.dest("dist/img"));
});

// перенесення файлів з каталогу app в dist
gulp.task("build", ["clean", "img", "csslibs", "scripts"], function() {

  var buildCss = gulp.src("app/css/*.css")
  .pipe(gulp.dest("dist/css"))

  var buildFonts = gulp.src("app/fonts/**/*")
  .pipe(gulp.dest("dist/fonts"))

  var buildJs = gulp.src("app/js/**/*")
  .pipe(gulp.dest("dist/js"))

  var buildHtml = gulp.src("app/*.html")
  .pipe(gulp.dest("dist"));

  var buildVideo = gulp.src("app/video/*.*")
  .pipe(gulp.dest("dist/video"));

});

// очистка кешу
gulp.task('clear', function () {
    return cache.clearAll();
})
