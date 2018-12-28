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
    new HtmlWebpackPlugin({ title: 'webpack', template: './src/index.ejs' }),
  ],
});