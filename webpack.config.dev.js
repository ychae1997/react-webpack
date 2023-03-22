const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const path = require('path');

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'docs'),
    },
    port: 3000,
    hot: true,
  },
  optimization: {
    runtimeChunk: 'single',
  }
});

// hot : true - 웹팩으로 빌드한 결과물 실시간으로 반영
