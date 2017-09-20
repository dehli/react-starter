const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'build');
const APP_DIR = path.resolve(__dirname, 'src');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
    entry: `${APP_DIR}/js/root.jsx`,
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
      loaders: [
        { test: /\.js?x$/, loader: 'babel-loader', exclude: /node_modules/ }
      ]
    },
    plugins: [HtmlWebpackPluginConfig]
};
