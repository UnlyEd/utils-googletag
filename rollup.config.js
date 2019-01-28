import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';

const plugins = [
  babel(),
  resolve(),
  commonjs(),
];

const inputPath = 'src/googleTag.js';

const watch = {
  exclude: 'node_modules/**',
  include: 'src/**',
};

module.exports = [
  { // generate a iife file in example
    input: inputPath,
    output:
      {
        file: 'example/bundle.js',
        format: 'iife',
        name: 'googleTag',
        exports: 'named',
      },
    plugins,
    watch,
  },
  {
    input: inputPath,
    output:
      {
        file: 'lib/index.js',
        format: 'cjs',
        name: 'googleTag',
        exports: 'named',
      },
    plugins,
    watch,
  },
];
