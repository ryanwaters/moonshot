import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import root reducer
import rootReducer from './reducers/index';

const defaultState = {

}

const store = createStore(rootReducer, defaultState)

const history = syncHistoryWithStore(browserHistory, store)
