import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';

export default () => ({
  mode: 'production',
  entry: { app: './src/index.js' },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name]_[hash:8].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({ title: 'mobx_demo', template: './src/index.ejs' })
  ],
  optimization: {
    minimizer: [
      new UglifyJSPlugin(),
    ],
  },
});