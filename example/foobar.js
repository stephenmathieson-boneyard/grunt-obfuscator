
var foo = require('./foo').foo;
var bar = require('./bar').bar;

module.exports = foobar;

function foobar() {
  return foo() + bar ();
}
