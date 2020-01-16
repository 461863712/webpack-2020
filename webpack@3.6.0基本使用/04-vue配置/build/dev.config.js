// npm i webpack-merge -D
const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config');

module.exports = webpackMerge(baseConfig,{
  //搭建本地服务器npm i webpack-dev-server@2.9.3 -D
  //在json里面配置：webpack-dev-server
  devServer: {
    contentBase: './dist',
    port:"3001",
    inline: true
  }
});