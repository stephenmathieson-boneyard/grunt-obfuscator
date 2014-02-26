
# grunt-obfuscator

  Obfuscate nodejs projects via Grunt

[![Build Status](https://travis-ci.org/stephenmathieson/grunt-obfuscator.png?branch=master)](https://travis-ci.org/stephenmathieson/grunt-obfuscator)


## Installation

    $ npm install grunt-obfuscator --save-dev

## Usage

```js
grunt.loadNpmTasks('grunt-obfuscator');

grunt.initConfig({
  obfuscator: {
    files: [
      'app.js',
      'lib/routes/*.js'
    ],
    entry: 'app.js',
    out: 'obfuscated.js',
    strings: true,
    root: __dirname
  }
});
```

## Options

### `files`

  An array of files to be obfuscated.  This must include every `require()`-ed file in your project.  Wildcards `e.g. "./lib/**/*.js"` are accepted.  

### `entry`

  Your project's entry point, for example `app.js`.

### `out`

  File to output to, for example `obfuscated.js`.

### `strings`

  Boolean option for obfuscating simple strings.  Defaults to `false`.

### `root`

  The base directory.  Usually `__dirname` works just fine.

## License 

(The MIT License)

Copyright (c) 2013 Stephen Mathieson &lt;me@stephenmathieson.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
