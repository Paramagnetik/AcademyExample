import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: './src/main.jsx',

  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
    publicPath: '', // <-- обязательно!
    clean: true,
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]', // <-- Webpack сам создаёт пути!
        },
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
      directory: path.join(process.cwd(), 'dist'),
    },
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 3000,
    open: true,
    allowedHosts: 'all',
  },
};
