//打包:webpack或者npm run build

const path = require("path");

module.exports = {
  entry: "./src/main.js",//入口
  output: {//出口
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
}