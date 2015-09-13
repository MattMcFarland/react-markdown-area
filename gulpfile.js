'use strict';

/* Module Dependencies */
const
  gulp        = require('gulp'),
  less        = require('gulp-less'),
  path        = require('path'),
  rename      = require('gulp-rename'),
  webserver   = require('gulp-webserver'),
  RSG         = require('react-styleguide-generator'),
  browserify  = require('browserify');

gulp.task('less', () => {
  return gulp.src('less/markedarea.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('dist'));
});


gulp.task('styleguide', (done) => {
  const rsg = RSG('index.js', {
    output: './examples/styleguide'
  });
  rsg.generate(function (err) {
    if (err) {
      console.error(String(err));
    }
    done();
  });
});


gulp.task('bundle', () => {
  gulp.src('index.js')
    .pipe(browserify({
      insertGlobals : true,
      debug : !gulp.env.production
    }))
    .pipe(gulp.dest('./dist'))
});

gulp.task('webserver', () => {
  gulp.src('examples')
    .pipe(webserver({
      livereload: true,
      open: true
    }))
});

gulp.task('build', ['less', 'bundle', 'styleguide', 'webserver']);

gulp.task('default', ['webserver']);
