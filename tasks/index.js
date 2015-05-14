var obfuscator = require('obfuscator'),
  obfuscatorCompressDefaults = obfuscator.utils.compress.defaults,
  fs = require('fs');

module.exports = function(grunt) {
  grunt.registerMultiTask('obfuscator', 'Obfuscate Node JS projects.', function () {
    var fn = this.async(),
      opts = this.options(),
      options = new obfuscator.Options(
        this.filesSrc,
        opts.root,
        opts.entry,
        opts.strings
      );

    // allow overrides for uglify compressor options.
    options.compressor = {};
    [
      'sequences',
      'properties',
      'dead_code',
      'drop_debugger',
      'unsafe',
      'conditionals',
      'comparisons',
      'evaluate',
      'booleans',
      'loops',
      'unused',
      'hoist_funs',
      'hoist_vars',
      'if_return',
      'join_vars',
      'cascade',
      'side_effects',
      'warnings',
      'global_defs'
    ].forEach(function(key) {
      if(opts.hasOwnProperty(key)) {
      	options.compressor[key] = opts[key];
      } else {
      	options.compressor[key] = obfuscatorCompressDefaults[key];
      }
    });

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
