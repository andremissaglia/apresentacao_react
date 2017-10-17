import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

const root = (
    <div>
        Hello World
    </div>
)

ReactDOM.render(root, document.getElementById('root'));

registerServiceWorker();
