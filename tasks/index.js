var obfuscator = require('obfuscator'),
  fs = require('fs');

module.exports = function(grunt) {
  grunt.registerMultiTask('obfuscator', 'Obfuscate Node JS projects.', function () {
    var fn = this.async(),
      opts = this.options(),
      obfuscatorCompressDefaults = obfuscator.utils.compress.defaults,
      obfuscatorCompressOpts = opts.compressor,
      options = new obfuscator.Options(
        this.filesSrc,
        opts.root,
        opts.entry,
        opts.strings
      );

    // allow overrides for uglify compressor options.
    Object.keys(obfuscatorCompressDefaults).forEach(function(key) {
      obfuscatorCompressOpts[key] = opts[key] || obfuscatorCompressDefaults[key];
    });
    options.compressor = obfuscatorCompressOpts;

    obfuscator(options, function (err, data) {
      if (err) {
        return fn(err);
      }

      fs.writeFile(opts.out, data, function (err) {
        if (err) {
          return fn(err);
        }

        fn();
      });
    });
  });
};
