const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/', // обязательно для Vercel
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|ico)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name][ext]',
        },
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: 'body',
    }),

    new CopyWebpackPlugin({
      patterns: [
        { from: 'public/favicon.ico', to: '' },
        { from: 'public/site.webmanifest', to: '' },
        { from: 'public/manifest.json', to: '' },
        { from: 'public/robots.txt', to: '' },
        { from: 'public/sitemap.xml', to: '' },
        { from: 'public/icons', to: 'icons' }, // все иконки
      ],
    }),
  ],

  devServer: {
    static: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    port: 3000,
  },

  mode: 'development',
};
