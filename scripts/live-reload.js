var watch = require('node-watch');
var livereload = require('gulp-livereload');

livereload.listen();

watch('./client/build/bundle.js', function (filename) {
  livereload.changed();
});

watch('./client/build/bundle.css', function (filename) {
  livereload.changed();
});
