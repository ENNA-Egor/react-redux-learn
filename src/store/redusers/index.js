import {combineReducers} from 'redux';
import {todos} from './todos-reduser'


export const rootReduser = combineReducers({
    todos,
});