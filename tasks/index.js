
var obfuscator = require('obfuscator');
var fs = require('fs');

module.exports = function(grunt) {
  grunt.registerTask('obfuscator', 'Your task description goes here.', function () {
    var fn = this.async();
    var entry = option('entry');
    var root = option('root');
    var out = option('out');
    var strings = option('strings');
    var files = option('files');

    files = grunt.file.expand(files);
    var options = new obfuscator.Options(files, root, entry, strings);

    obfuscator(options, function (err, data) {
      if (err) {
        grunt.log.error(err);
        return fn(false);
      }

      fs.writeFile(out, data, function (err) {
        if (err) {
          grunt.log.error(err);
          return fn(false);
        }

        fn();
      });
    });
  });

  function option(name) {
    return grunt.config('obfuscator.' + name);
  }
};
