import React from 'react';  // const React = require('react');
import ReactDom from 'react-dom'; // const ReactDom = require('react-dom');
import { hot } from 'react-hot-loader/root';  // const { hot } = require('react-hot-loader/root');

const NumberBaseball = require('./NumberBaseball');

const Hot = hot(NumberBaseball);

ReactDom.render(<Hot />, document.querySelector('#root'));