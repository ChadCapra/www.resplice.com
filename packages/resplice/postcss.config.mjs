import postcssPresetEnv from 'postcss-preset-env'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'

export default {
  plugins: [
    postcssPresetEnv({ stage: 1 }),
    tailwindcss('./tailwind.config.js'),
    autoprefixer,
    cssnano({ preset: 'default' })
  ]
}
