plugins: [
  new HtmlWebpackPlugin({
    template: './public/index.html',
  }),

  new CopyPlugin({
    patterns: [{ from: 'public/index.html', to: '404.html' }],
  }),
];
