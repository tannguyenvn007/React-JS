import React from 'react';
import App from './components/App';


import { render } from 'react-dom';
import { Provider } from 'react-redux'; // De lam gi ?
import { createStore } from 'redux';
import rootReducer from './reducers'

const store = createStore(rootReducer);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
