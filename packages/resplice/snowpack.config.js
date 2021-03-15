// Consult https://www.snowpack.dev to learn about these options
module.exports = {
  extends: '@sveltejs/snowpack-config',
  plugins: ['@snowpack/plugin-typescript'],
  mount: {
    'src/mocks': '/_mocks',
    'src/components': '/_components'
  },
  alias: {
    $components: './src/components',
    $types: './src/types'
  }
}
