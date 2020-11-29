import resolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import typescript from '@rollup/plugin-typescript';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
  input: 'src/components/index.tsx',
  output: [
    {
      name: 'IndexList',
      format: 'es',
      file: 'dist/lib/leReactUI.esm.js'
    }, {
      name: 'IndexList',
      format: 'umd',
      file: 'dist/lib/leReactUI.js'
    }
  ],
  external: ['react', 'react-dom'],
  globals: {
    react: 'React',
    "react-dom": "ReactDOM",
  },
  plugins: [
    resolve({
      mainFields: ['module', 'main', 'jsnext:main', 'browser'],
      extensions
    }),
    babel({
      exclude: '**/node_modules/**',
      runtimeHelpers: true
    }),
    commonjs({
      include: "node_modules/**"
    }),
    postcss({
      extract: true,
      extensions: ['.scss']
    }),
    typescript()
  ],
};