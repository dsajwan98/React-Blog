import React from 'react';
import ReactDom from 'react-dom';
import App from '../components/App';

if (module.hot) {
    module.hot.accept()
}

var rootElement = document.getElementById('root');
ReactDom.render(<App name={'Joe'}/>,rootElement);
