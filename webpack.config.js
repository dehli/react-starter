const path = require('path');

const APP_DIR = path.resolve(__dirname, 'src');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
    entry: path.resolve(APP_DIR, 'root.jsx'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
      loaders: [
        { test: /\.js?x$/, loader: 'babel-loader', exclude: /node_modules/ }
      ]
    },
    plugins: [HtmlWebpackPluginConfig],

    resolve: {
        alias: {
            src: APP_DIR
        }
    }
};
