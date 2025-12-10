import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { fileURLToPath } from 'url';
import CopyPlugin from 'copy-webpack-plugin';
// Добавляем поддержку __dirname для ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './src/main.jsx',

  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: 'bundle.js',
    clean: true,

    // Чтобы React Router /courses/... не ломал пути
    publicPath: '/AcademyExample/',

    // Куда складывать картинки
    assetModuleFilename: 'images/[name][ext]',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [
      // JS / JSX
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },

      // CSS
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },

      // IMG assets
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },

    // Главный параметр, чтобы SPA маршруты /courses/... работали
    historyApiFallback: true,

    host: '0.0.0.0',
    port: 3000,
    open: true,
    allowedHosts: 'all',
  },
};
