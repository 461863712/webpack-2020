//打包:webpack或者npm run build

const path = require("path");

module.exports = {
  entry: "./src/main.js",//入口
  output: {//出口
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath:'dist/',//涉及到url的都会前面加这个
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              //加载的图片小于limit，会将图片编译成base64
              //加载的图片大于limit，需要使用file-loader加载，图片被打包了
              limit: 8192, //8kb*1024
              name:"img/[name]_[hash:8].[ext]"
            }
          }
        ]
      },
      //ES6转换成ES5
      //npm install babel-loader@7 babel-core babel-preset-es2015 -D
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ]
  },
};