module.exports = function(gulp, plugins, pluginsConnect) {
  return function() {
    plugins.connect.server({
      root: 'build',
      port: 8080,
      livereload: true
    })
  };
};
