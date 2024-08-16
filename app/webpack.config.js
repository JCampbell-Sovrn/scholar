/*
 * webpack.config
 */

const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const PATHS = {
  app: path.join(__dirname, 'src/index.js')
};

module.exports = {
  entry: {
    app: PATHS.app,
    scholar: PATHS.scholar, // Add this line
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js', // This will create app.bundle.js and scholar.bundle.js
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: /src/,
        sideEffects: false,
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.js'],
    fallback: { buffer: false },
  },
  devtool: 'source-map',
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: process.env.ANALYZE_MODE || 'disabled',
    }),
  ],
};
