import sveltePreprocess from 'svelte-preprocess'
import node from '@sveltejs/adapter-node'
import { resolve } from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess(),
  kit: {
    // By default, `npm run build` will create a standard Node app.
    // You can create optimized builds for different platforms by
    // specifying a different adapter
    adapter: node(),

    // hydrate the <div id="svelte"> element in src/app.html
    target: '#app',

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
