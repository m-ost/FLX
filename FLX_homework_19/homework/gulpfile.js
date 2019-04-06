const { task, watch, series, src, dest } = require("gulp");
const less = require("gulp-less");
const htmlmin = require("gulp-htmlmin");
const browserSync = require("browser-sync").create();
const concat = require("gulp-concat");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const imagemin = require('gulp-imagemin');

const sync = () => {
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });
};

const lessTask = () => {
  return src("./src/less/**/*.less")
    .pipe(less())
    .pipe(concat("styles.css"))
    .pipe(dest("./dist/css/"))
    .pipe(browserSync.reload({ stream: true }));
};

const minifyHTML = () => {
  return src(["./src/**/*.html"])
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        removeComments: true
      })
    )
    .pipe(dest("./dist"))
    .pipe(browserSync.reload({ stream: true }));
};

const js = () => {
  return src("./src/js/app.js")
    .pipe(concat("all.js"))
    .pipe(babel({ presets: ["@babel/env"] }))
    .pipe(uglify())
    .pipe(dest("dist/js"))
    .pipe(browserSync.reload({ stream: true }));
};

const imageCompressed = () => {
  return src("src/img/*")
    .pipe(imagemin())
    .pipe(dest("dist/img"));
};


task("default", series(lessTask, minifyHTML, js, imageCompressed));

exports.server = () => {
  sync();
  watch(["./src/less/**/*.less"], lessTask);
  watch(["./src/**/*.html"], minifyHTML);
  watch(["./src/**/app.js"],js);
  watch("*.html").on("change", browserSync.reload);
};
