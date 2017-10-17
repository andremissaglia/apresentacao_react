import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Clock from './Clock';

ReactDOM.render(<Clock name="andré"/>, document.getElementById('root'));

registerServiceWorker();
