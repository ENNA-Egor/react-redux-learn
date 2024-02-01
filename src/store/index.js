import {createStore} from 'redux';
import {rootReduser} from './redusers';
import {loadState, saveState} from './helper/local-storage';


export const configureStore = () => {
    const persistedState = loadState();

  const store = createStore(
    rootReduser, 
    persistedState, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),);

  store.subscribe(()=> {
      saveState(store.getState());
  });
    return store;
}

