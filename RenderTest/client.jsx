import React from 'react';
import ReactDom from 'react-dom/client';

import Test from './RenderTest.jsx';

ReactDom.createRoot(document.querySelector('#root')).render(<Test />);
