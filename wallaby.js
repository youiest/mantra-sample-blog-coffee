module.exports = function (wallaby) {
  // There is a weird error with the mui and mantra.
  // See: https://goo.gl/cLH8ib
  // Using require here seems to be the error.
  // Renaming it into `load` just fixed the issue.
  var load = require;

  return {
    files: [
      // these need to include .coffee files
      // but result in wallaby 'module not found' errors
      // https://github.com/wallabyjs/wallaby-coffeescript-sample
      // above works with coffee, but not here, TODO FIXME
      'client/modules/**/components/*.js',
      'client/modules/**/actions/*.js',
      'client/modules/**/containers/*.js',
      'client/modules/**/libs/*.js'
    ],
    tests: [
      'client/**/tests/*.js'
    ],
    compilers: {
       '**/*.js*': wallaby.compilers.babel({
         babel: load('babel-core'),
         presets: ['es2015', 'stage-2', 'react']
       })
    },
    env: {
      type: 'node'
    },
    testFramework: 'mocha',
    setup: function() {
      global.React = require('react');
    }
  };
};
