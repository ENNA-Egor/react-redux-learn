import { UseSelector, useDispatch, useSelector } from "react-redux";
import {selectActiveFilter} from '../store/selectors/filters-selector';
import {setFilter} from '../store/actions/filters-actions';

const Filters =() => {
    const dispatch = useDispatch();
    const activeFilter = useSelector(selectActiveFilter);
    return (
        <div>
            <button onClick={() => dispatch(setFilter('all'))} style={{color: activeFilter ==='all' ? 'red' : 'blue'}}>all</button>
            <button onClick={() => dispatch(setFilter('active'))} style={{color: activeFilter ==='active' ? 'red' : 'blue'}}>active</button>
            <button onClick={() => dispatch(setFilter('completed'))} style={{color: activeFilter ==='completed' ? 'red' : 'blue'}}>completed</button>
        </div>
    )
};

export {Filters};