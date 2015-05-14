
module.exports = function (grunt) {
  grunt.loadTasks('../tasks');

  grunt.initConfig({
    obfuscator: {
      src: [
        './*.js'
      ],
      options: {
        root: __dirname,
        entry: 'app.js',
        out: 'out.js',
        warnings: true
      }
    }
  });
};
