import sveltePreprocess from 'svelte-preprocess'
import node from '@sveltejs/adapter-node'
import { resolve } from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess({
    defaults: {
      script: 'typescript'
    }
  }),
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
          $api: resolve('./src/api'),
          $stores: resolve('./src/stores'),
          $workers: resolve('./src/workers')
        }
      }
    }
  }
}

export default config