
var spawn = require('child_process').spawn;
var assert = require('better-assert');

spawn('grunt', [ 'obfuscator' ], { cwd: './example' })
.on('close', function (code) {
  assert(0 === code);
  assert('foobar' === require('../example/out'));
});
