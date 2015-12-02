'use strict';

/* Module Dependencies */
const
  gulp  = require('gulp'),
  gutil = require('gulp-util');

/* Tasks */
const
  bundle    = require('./tasks/bundle'),
  bundlemin = require("./tasks/bundlemin"),
  lint      = require('./tasks/lint'),
  watch     = require('./tasks/watch'),
  sass      = require('./tasks/sass');

// minor tasks
gulp.task('lint',       () => lint('lib/markedarea.js'));
gulp.task('sass',       () => sass('style/markedarea.scss', 'markedarea', 'dist'));
gulp.task('bundlemin',  () => bundlemin('lib/markedarea',   'markedarea', 'dist'));
gulp.task('bundle',     () => bundle('lib/markedarea',      'markedarea', 'dist'));

// major tasks
gulp.task('bundle-prod',  ['lint', 'sass', 'bundlemin']);
gulp.task('bundle-dev',   ['lint', 'sass', 'bundle']);

// watchers
gulp.task('watch-src',  () =>
  watch('src/markedarea', 'markedarea', 'dist'));

gulp.task('watch-sass', () => {
  gutil.log('Watch style/markedarea.scss');
  gulp.watch('style/markedarea.scss', (e) => {
    gutil.log('File Changed', gutil.colors.cyan(e.path));
    sass('style/markedarea.scss', 'markedarea', 'dist')
  });
});



