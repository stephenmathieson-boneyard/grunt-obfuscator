
module.exports = function (grunt) {
  grunt.loadTasks('../tasks');

  grunt.initConfig({
    obfuscator: {
      files: [
        './*.js'
      ],
      root: __dirname,
      entry: 'app.js',
      out: 'out.js'
    }
  });
};
