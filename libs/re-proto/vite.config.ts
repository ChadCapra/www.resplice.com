/// <reference types="vitest/config" />
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 're-proto',
      formats: ['es'],
      fileName: (format) => `re-proto.${format}.js`
    },
    rollupOptions: {},
    sourcemap: true,
    // Reduce bloat from legacy polyfills.
    target: 'esnext',
    // Leave minification up to applications.
    minify: false
  },
  define: {
    'import.meta.vitest': 'undefined'
  },
  resolve: {
    alias: {
      $utils: resolve('./src')
    }
  },
  test: {
    includeSource: ['src/**/*.ts']
  },
  plugins: [dts()]
})
