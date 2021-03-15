import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import svelte from 'rollup-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'

import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'

import pkg from './package.json'

const production = !process.env.ROLLUP_WATCH
const name = pkg.name
  .replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
  .replace(/^\w/, (m) => m.toUpperCase())
  .replace(/-\w/g, (m) => m[1].toUpperCase())

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: production
    },
    {
      file: pkg.main,
      format: 'umd',
      name,
      sourcemap: production
    }
  ],
  plugins: [
    commonjs(),
    typescript(),
    postcss({
      extract: true,
      plugins: [
        tailwindcss('./tailwind.config.js'),
        autoprefixer(),
        cssnano({ preset: 'default' })
      ]
    }),
    svelte({
      preprocess: sveltePreprocess()
    }),
    resolve({
      dedupe: ['svelte']
    }),
    production && terser()
  ],
  watch: {
    clearScreen: false
  }
}
