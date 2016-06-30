module.exports = function(gulp, plugins, pluginsConnect) {
  return function() {
    gulp.src('build/*.html')
      .pipe(plugins.connect.reload());
  };
};
