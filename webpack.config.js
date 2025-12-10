const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';

  return {
    entry: './src/main.jsx',

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProd ? 'bundle.[contenthash].js' : 'bundle.js',
      publicPath: '/', // важно для Vercel
      clean: true,
    },

    resolve: {
      extensions: ['.js', '.jsx'],
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
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.(png|jpg|jpeg|webp|gif|svg)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'images/[name][ext]',
          },
        },
      ],
    },

    optimization: {
      minimize: isProd,
      minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        favicon: './public/favicon.ico',
      }),

      new MiniCssExtractPlugin({
        filename: isProd ? 'styles.[contenthash].css' : 'styles.css',
      }),

      new CopyPlugin({
        patterns: [
          // манифест
          { from: 'public/manifest.json', to: '' },

          // SEO файлы
          { from: 'public/robots.txt', to: '' },
          { from: 'public/sitemap.xml', to: '' },

          // иконки PWA
          { from: 'public/icons', to: 'icons' },

          // // прочие public-файлы
          // { from: 'public/files', to: 'files' },

          // // изображения, если нужно
          // { from: 'public/images', to: 'images' },
        ],
      }),
    ],

    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      historyApiFallback: true, // фикс для React Router
      open: true,
      port: 3000,
    },
  };
};
