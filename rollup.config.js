const commonjs = require('rollup-plugin-commonjs');
const babel = require('rollup-plugin-babel');

module.exports = {
  input: 'index.js',
  output: {
    file: 'example/bundle.js',
    format: 'iife',
    name: 'googleTag',
    exports: 'named',
  },
  plugins: [
    commonjs(),
    babel(),
  ],
};
