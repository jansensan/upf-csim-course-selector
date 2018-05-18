var config = require('./gulp-config')(),
  requireDir = require('require-dir');

// require tasks directory
requireDir('./tasks', { recurse: true });

