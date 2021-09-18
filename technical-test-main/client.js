import 'regenerator-runtime/runtime'

import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './client/reducers/index.jsx';
import { getData } from './client/actions/index.jsx';

import App from './client/app.jsx';

const store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch(getData);

render(
    <Provider store={store}>
    	<App name={'Apoorva'}/>
    </Provider>,
    document.getElementById('app')
);
