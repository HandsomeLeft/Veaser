const glob = require('glob')
const { VueLoaderPlugin } = require('vue-loader')
const path = require('path')
// const { component } = require('vue/types/umd');

const list = {}
function make_list(dirpath, list) {
  const files = glob.sync(`${dirpath}/**/index.js`)
  for (let file of files) {
    const component = file.split(/[/.]/)[2]
    list[component] = `./${file}`
  }
}

make_list('components/lib', list)

module.exports = {
  entry: list,
  mode: 'development',
  output: {
    filename: '[name].umd.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'mui',
    libraryTarget: 'umd'
  },
  plugins: [new VueLoaderPlugin()],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader'
          }
        ]
      }
    ]
  }
}
