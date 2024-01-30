import {combineReducers} from 'redux';
import {todos} from './todos-reduser'
import {filters} from '../redusers/filters-reduser'

export const rootReduser = combineReducers({
    todos,
    filters,
});