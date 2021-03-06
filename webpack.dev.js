const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const CopyWepbackPluign = require('copy-webpack-plugin');

const common = require('./webpack.common.js');

const src = path.join(__dirname, 'src');
const dist = path.join(__dirname, 'dist');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: 'index.bundle.js',
    library: 'tbf04',
    path: dist
  },
  devServer: {
    contentBase: dist,
    inline: true,
    hot: true,
    port: 8000,
    disableHostCheck: true
  },
  plugins: [
    new CopyWepbackPluign([
      {
        context: path.join(src, 'assets'),
        from: '**/*',
        to: path.join(dist, 'tbf04')
      }
    ]),
    new webpack.HotModuleReplacementPlugin()
  ]
});
