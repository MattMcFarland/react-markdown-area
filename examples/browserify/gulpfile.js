'use strict'

const
  browserify = require('browserify'),
  gulp = require('gulp'),
  fs = require('fs'),
  source = require('vinyl-source-stream'),
  buffer = require('vinyl-buffer'),
  gutil = require('gulp-util');

const bundle = function(entry, name, dest) {

  var b = browserify({
    entries: entry,
    debug: true
  });

  gutil.log('Creating bundle from', gutil.colors.cyan(entry + '.js'));
  b.on('log', gutil.log);
  return b.bundle()
    .on('nextTick', () => {
      gutil.log('Tick', gutil.colors.magenta(__filename));
    })
    .on('error', gutil.log)
    .pipe(source(name + '.js'))
    .pipe(buffer())
    .on('end', () => {
      gutil.log('File Saved', gutil.colors.cyan(dest + '/' + name + '.js'));
    })
    .pipe(gulp.dest(dest));
};

gulp.task('default', () => bundle('./src/index', 'bundle', 'dist'));
