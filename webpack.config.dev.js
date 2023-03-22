const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const path = require('path');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

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
  },
  plugins: [new ReactRefreshPlugin()],
});

// hot : true - 웹팩으로 빌드한 결과물 실시간으로 반영
// react-refresh-webpack-plugin : webpack-dev-server처럼 저장할때마다 변경사항을 적용시며주고, 리액트의 상태를 유지해주는 플러그인
