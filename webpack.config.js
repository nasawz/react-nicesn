var webpack = require('webpack');
var path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var pkg = require('./package.json')

module.exports = {
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    contentBase: './dist',
    port: 8080,
  },
  entry: {
    app: ['./app/main.jsx']
  },
  output: {
    path: __dirname + '/dist/',
    publicPath: '',
    filename: pkg.version + "/[name].js",
    chunkFilename: pkg.version + '/module.[name].js',
    hotUpdateChunkFilename: '1',
    hotUpdateMainFilename: '2'
  },
  resolveLoader: {
    alias: {
      'copy': 'file-loader?name=' + pkg.version + '/res/[name].[ext]'
    }
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        include: path.resolve(__dirname, 'app'),
        exclude: [/node_modules/],
        loaders: ['react-hot', 'babel-loader']
      },
      {
        test: /\.(png|jpg|svg)$/,
        exclude: [/images_load/, /res/],
        loader: 'url-loader?name=' + pkg.version + '/res/[name].[ext]?limit=8000'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      },
      {
        test: /\.css$/,
        exclude: [/res/],
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer")
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.MinChunkSizePlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin(pkg.version + "/[name].css"),
    new webpack.optimize.CommonsChunkPlugin({
      name: "common",
      minChunks: 2
    }),
  ]
};
