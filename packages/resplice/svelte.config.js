import sveltePreprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-static'
import { resolve } from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null,
      precompress: false
    }),

    prerender: {
      // This can be false if you're using a fallback (i.e. SPA mode)
      default: true
    },

    vite: {
      resolve: {
        alias: {
          $services: resolve('./src/services'),
          $stores: resolve('./src/stores'),
          $types: resolve('./src/types'),
          $workers: resolve('./src/services/workers')
        }
      }
    }
  }
}

export default config
