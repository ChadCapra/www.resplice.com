/// <reference types="vitest/config" />
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import pkg from './package.json'

export default defineConfig({
  plugins: [dts()],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 're-utils',
      formats: ['es'],
      fileName: 're-utils.js'
    },
    rollupOptions: {
      external: Object.keys(pkg.peerDependencies)
    },
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
    environment: 'happy-dom',
    includeSource: ['src/**/*.ts']
  }
})
