import path from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-dts'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/main.js'),
      name: 're-components',
      fileName: (format) => `my-lib.${format}.js`
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['svelte'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          svelte: 'svelte'
        }
      }
    },
    sourcemap: true,
    // Reduce bloat from legacy polyfills.
    target: 'esnext',
    // Leave minification up to applications.
    minify: false
  },
  plugins: [dts()]
})
