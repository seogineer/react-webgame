const React = require('react');
const ReactDom = require('react-dom/client');

const WordRelay = require('./WordRelay.jsx');

ReactDom.createRoot(document.querySelector('#root')).render(<WordRelay />);