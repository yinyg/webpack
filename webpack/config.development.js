import HtmlWebpackPlugin from 'html-webpack-plugin';
import  webpack from 'webpack';

export default () => ({
  mode: 'development',
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
    new HtmlWebpackPlugin({ title: 'mobx_demo', template: './src/index.ejs' }),
  ],
});