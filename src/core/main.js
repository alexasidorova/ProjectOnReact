import React from 'react';
import ReactDom from 'react-dom';
import Root from './root.jsx';

const rootElement = document.querySelector('#root');

ReactDom.render(<Root />, rootElement);
