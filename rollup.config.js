import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
  },
  plugins: [
    resolve({
      extensions: ['.js', '.jsx'],
      customResolveOptions: {
        moduleDirectory: 'node_modules',
      },
    }),
    babel({ exclude: 'node_modules/**' }),
    commonjs(),
  ],
  external: name =>
    /react|prop-types|styled-components|react-router-dom/.test(name),
}
