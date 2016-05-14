import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Reducers from '/Reducers';
import rootSaga from '/Sagas';
import App from '/components/App';

const logger = createLogger({
    level: 'debug'
});

const sagaMiddleware = createSagaMiddleware();

const createStoreWithMiddleware = applyMiddleware(
    logger,
    sagaMiddleware
)(createStore);

let store = createStoreWithMiddleware(Reducers);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
            <App></App>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('container')
);
