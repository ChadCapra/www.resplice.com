module.exports = {
  plugins: [
    require('postcss-preset-env')({ stage: 1 }),
    require('tailwindcss')('./tailwind.config.js'),
    require('autoprefixer'),
    require('cssnano')({ preset: 'default' })
  ]
}
