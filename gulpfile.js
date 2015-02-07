"use strict";

var gulp = require('gulp'),
    connect = require('gulp-connect'),
    opn = require('opn'),
    wiredep = require('wiredep').stream,
    useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css'),
    clean = require('clean'),
    cmq = require('gulp-combine-media-queries'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant');

// Очистка папки production
// gulp.task('clean-prod', function () {
//  return gulp.src('prod').pipe(clean());
// });

// Очистка папки production
// gulp.task('clean-prog', function () {
//   return gulp.src('prog').pipe(clean());
// });

// Сборка проекта для production, конкатенация и минификация js и css
gulp.task('move-html-prod', function() {
    var assets = useref.assets();
    return gulp.src('app/*.html')
        .pipe(assets)
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(assets.restore())
        .pipe(useref())
        .pipe(gulp.dest('prod'));
});

// Сборка проекта для production
gulp.task('move-file-prod', function() {
  gulp.src('app/fonts/**')
  .pipe(gulp.dest('prod/fonts'));
  gulp.src(['app/img/**', '!app/img/design/sprite-images', '!app/img/design/sprite-images-2x'])
  .pipe(gulp.dest('prod/img'));
  gulp.src('app/tpls/**')
  .pipe(gulp.dest('prod/tpls'));
  gulp.src('app/upload/**')
  .pipe(gulp.dest('prod/upload'));
});

// Сборка проекта для передачи программисту
gulp.task('move-file-prog', function() {
  gulp.src('app/fonts/**')
  .pipe(gulp.dest('prog/fonts'));
  gulp.src(['app/img/**', '!app/img/design/sprite-images', '!app/img/design/sprite-images-2x'])
  .pipe(gulp.dest('prog/img'));
  gulp.src('app/css/**')
  .pipe(gulp.dest('prog/css'));
  gulp.src('app/js/**')
  .pipe(gulp.dest('prog/js'));
  gulp.src('app/*.html')
  .pipe(gulp.dest('prog'));
  gulp.src('app/tpls/**')
  .pipe(gulp.dest('prog/tpls'));
  gulp.src('app/upload/**')
  .pipe(gulp.dest('prog/upload'));
});

// Комбинирование медиа запросов в css
gulp.task('cmq', function() {
  gulp.src('app/css/sprite.css')
    .pipe(cmq({
      log: false
    }))
    .pipe(gulp.dest('app/css'));
});

// Оптимизация изображений
gulp.task('img-min', function () {
    return gulp.src('app/img/**')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('app/img/'));
});

// Оптимизация изображений в проекте для production
// gulp.task('img-min-prod', function () {
//     return gulp.src('prod/img/**')
//         .pipe(imagemin({
//             progressive: true,
//             svgoPlugins: [{removeViewBox: false}],
//             use: [pngquant()]
//         }))
//         .pipe(gulp.dest('prod/img/'));
// });

// Оптимизация изображений в проекте для программиста
// gulp.task('img-min-prog', function () {
//     return gulp.src('prog/img/**')
//         .pipe(imagemin({
//             progressive: true,
//             svgoPlugins: [{removeViewBox: false}],
//             use: [pngquant()]
//         }))
//         .pipe(gulp.dest('prog/img/'));
// });

// Work with bower
// gulp.task('wiredep', function () {
//   gulp.src('app/*.html')
//     .pipe(wiredep({
//       directory: 'app/bower_components'
//     }))
//     .pipe(gulp.dest('app'));
// });

// Server
// gulp.task('connect', function() {
//   connect.server({
//     root: 'app',
//     livereload: true
//   });
//   opn('http://localhost:8080/');
// });

// html
// gulp.task('html', function(){
//  gulp.src('app/*.html')
//  .pipe(connect.reload());
// })

// js
// gulp.task('js', function(){
//  gulp.src('app/js/*.js')
//  .pipe(connect.reload());
// })

// css
// gulp.task('css', function(){
//  gulp.src('app/css/*.css')
//  .pipe(connect.reload());
// })

// Слежка
gulp.task('watch', function() {
  // gulp.watch(['app/*.html'], ['html']);
  // gulp.watch(['app/css/*.css'], ['css']);
  // gulp.watch(['app/js/*.js'], ['js']);
  // gulp.watch('bower.json', ['wiredep']);
  gulp.watch('app/css/sprite.css', ['cmq']);
  // gulp.watch('app/img/**', ['img-min']);
});

// Default
gulp.task('default', ['watch']);

// Создание версии для production
gulp.task('prod', ['move-file-prod', 'move-html-prod']);

// Создание версии для программиста
gulp.task('prog', ['move-file-prog']);