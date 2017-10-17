import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './App';

ReactDOM.render(<App name="andré"/>, document.getElementById('root'));

registerServiceWorker();
