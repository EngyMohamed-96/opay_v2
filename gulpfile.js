const fileinclude = require('gulp-file-include');
const gulp = require('gulp');
const image = require('gulp-image');

gulp.task('css', async function() {
  gulp.src(['./stage/sass/*.css'])
  .pipe(gulp.dest('./dist/css'))
});

gulp.task('js', async function() {
  gulp.src(['./stage/js/**/*.js'])
  .pipe(gulp.dest('./dist/js'))
});




gulp.task('fileinclude', async function() {
    gulp.src(['./stage/html/**/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./dist/'))
  });


  gulp.task('image', async function () {
    gulp.src('./stage/imgs/*')
     // .pipe(image())
      .pipe(gulp.dest('./dist/imgs/'));
  });
   

  gulp.task('watch', async function(){
    gulp.watch(['./stage/html/**/*.html'], gulp.series('fileinclude'));
    gulp.watch(['./stage/sass/App.css'], gulp.series('css'));
    gulp.watch(['./stage/js/**/*.js'], gulp.series('js'));
    gulp.watch(['./stage/imgs/*'], gulp.series('image'));
  })
  // watch('stage/html/**/*.html', series(javascript));