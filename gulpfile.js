'use strict';

/* Module Dependencies */
const
  browserify  = require('browserify'),
  gulp        = require('gulp'),
  source      = require('vinyl-source-stream'),
  buffer      = require('vinyl-buffer'),
  gutil       = require('gulp-util'),
  less        = require('gulp-less'),
  path        = require('path'),
  rename      = require('gulp-rename'),
  webserver   = require('gulp-webserver'),
  RSG         = require('react-styleguide-generator');


gulp.task('less', () => {
  return gulp.src('less/markedarea.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./dist'));
});


gulp.task('styleguide', (done) => {
  const rsg = RSG('./lib/markedarea.js', {
    output: './styleguide'
  });
  rsg.generate(function (err) {
    if (err) {
      console.error(String(err));
    }
    done();
  });
});


gulp.task('bundle', () => {
  var b = browserify({
    entries: './eindex.js',
    debug: true
  });
  return b.bundle()
    .on('error', gutil.log)
    .pipe(source('markedarea.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./dist'));
});

gulp.task('webserver', () => {
  gulp.src('examples/basic')
    .pipe(webserver({
      livereload: true,
      open: true
    }))
});

gulp.task('default', ['webserver']);
