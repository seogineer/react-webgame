const path = require('path');

module.exports = {
  name: 'wordrelay-setting',
  mode: 'deveolopment', // 실서비스: production
  devtool: 'eval',
  // resolve: {
  //   extensions: ['.js', '.jsx'],
  // },  // entry.app 파일 확장자를 사용하고 싶지 않는 경우 사용

  entry: {
    app: ['./client.jsx'],
  },  // 입력
  output: {
    path: path.join(__dirname, 'dist'), // /Users/seogineer/Documents/workspace/react-webgame/2.끝말잇기/dist
    filename: 'app.js',
  },  // 출력
};