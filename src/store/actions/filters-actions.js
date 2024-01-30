import {SET_FILTER} from '../constants/filters-constant';

export const setFilter = (filter)=> ({
    type: SET_FILTER,
    filter,
})