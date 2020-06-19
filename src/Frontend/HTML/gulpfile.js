var gulp = require("gulp");
var sass = require("gulp-sass");

const path = {
  dist: {
    //html: 'dist/',
    js: "dist/js/",
    css: "dist/css/",
    //img: "dist/img/",
  },
  src: {
    //html: 'src/*.html',
    js: "src/js/*.js",
    scss: "src/main.scss",
   // img: "src/img/**/*.*",
  },

  clean: "./dist",
};


gulp.task('sass', function(cb) {
  gulp
    .src(path.src.scss)
    .pipe(sass())
    .pipe(
      gulp.dest(path.dist.css)
    );
  cb();
});

gulp.task(
  'default',
  gulp.series('sass', function(cb) {
    gulp.watch(path.src.scss, gulp.series('sass'));
    cb();
  })
);


