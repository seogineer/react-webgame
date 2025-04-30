import React from 'react';  // const React = require('react');
import ReactDom from 'react-dom/client'; // const ReactDom = require('react-dom/client');
// import { hot } from 'react-hot-loader/root';  // const { hot } = require('react-hot-loader/root');

import NumberBaseball from './NumberBaseball.jsx';

// const Hot = hot(NumberBaseball);

ReactDom.createRoot(document.querySelector('#root')).render(<NumberBaseball />);
