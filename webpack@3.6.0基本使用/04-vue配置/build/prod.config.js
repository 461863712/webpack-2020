const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
// npm i webpack-merge -D
const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config');

module.exports = webpackMerge(baseConfig, {
  plugins: [
    //压缩js: npm i uglifyjs-webpack-plugin@1.1.1 -D
    new UglifyJsWebpackPlugin()
  ]
});