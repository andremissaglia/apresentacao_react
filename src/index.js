import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import TodoApp from './components/TodoApp';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
const root = (
    <Provider store={store}>
        <TodoApp/>
    </Provider>
)
ReactDOM.render(root, document.getElementById('root'));

registerServiceWorker();
