import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
  entry: 'src/prettier.js',
  dest: 'dist/prettier.js',
  plugins: [
    babel(),
    uglify()
  ],
  format: 'iife'
}
