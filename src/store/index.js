import {createStore} from 'redux';
import {rootReduser} from './redusers';
import {loadState} from './helper/local-storage';


// export const configureStore = () => {
    const persistedState = loadState();

    export const store = createStore(rootReduser, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//     return store;
// }

