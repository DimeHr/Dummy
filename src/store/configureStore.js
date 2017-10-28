import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import rootReducer from '../rootReducer';

export const history = createHistory(); // TODO check if we need it

let middleware;
if (process.env.NODE_ENV === 'production') { // eslint-disable-line no-undef
    middleware = [
        thunk,
        routerMiddleware(history),
    ];
} else {
    middleware = [
        thunk,
        routerMiddleware(history),
    ];
}

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState, composeWithDevTools(
        applyMiddleware(...middleware)
    ));

    return store;
};

