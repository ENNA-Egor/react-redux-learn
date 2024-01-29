import {configureStore} from 'redux';
import {rootRduser} from './redusers';

export const store = configureStore(rootRduser, [], window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
