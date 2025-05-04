const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  name: 'react-router-dev',
  mode: 'development', // 실서비스: production
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },  // entry.app 파일 확장자를 사용하고 싶지 않는 경우 사용

  entry: {
    app: ['./client'],
  },  // 입력

  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
            targets: {
              browsers: ['> 5% in KR', 'last 2 chrome versions'],
            },
            debug: true,
          }],
          '@babel/preset-react'
        ],
        plugins: [
          'react-refresh/babel'
        ],
      },
    }],
  },  // jsx 파일에 babel loader 규칙을 적용

  plugins: [
    new RefreshWebpackPlugin()
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/dist/',
  },  // 출력
  devServer: {
    devMiddleware: { publicPath: '/dist' },
    static: { directory: path.resolve(__dirname) },
    hot: true
  }
};