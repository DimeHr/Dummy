import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
    <Provider store={ store }>
        <Router>
            <div>
                <Route exact path="/" component={ App }/>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
