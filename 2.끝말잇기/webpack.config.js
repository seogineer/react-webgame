const path = require('path');

module.exports = {
  name: 'wordrelay-setting',
  mode: 'development', // 실서비스: production
  devtool: 'eval',
  // resolve: {
  //   extensions: ['.js', '.jsx'],
  // },  // entry.app 파일 확장자를 사용하고 싶지 않는 경우 사용

  entry: {
    app: ['./client.jsx'],
  },  // 입력

  module: {
    rules: [{
      test: /\.jsx?/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
      },
    }],
  },  // jsx 파일에 babel loader 규칙을 적용

  output: {
    path: path.join(__dirname, 'dist'), // /Users/seogineer/Documents/workspace/react-webgame/2.끝말잇기/dist
    filename: 'app.js',
  },  // 출력
};