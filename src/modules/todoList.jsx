import { useSelector, useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../store/actions/todos-actions";
import {selectVisibleTodos} from '../store/selectors/todos-selector';
import {selectActiveFilter} from '../store/selectors/filters-selector';


export const TodoList = () => {
  const dispatch = useDispatch();
  const activeFilter = useSelector(selectActiveFilter);
  const todos = useSelector(state => selectVisibleTodos(state, activeFilter));
  
    return (
      <ul>
        {todos.map((todo) => (
          <li key={todo.title}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
            />{" "}
            {todo.title}{" "}
            <button onClick={() => dispatch(removeTodo(todo.id))}>delete</button>
          </li>
        ))}
      </ul>
    );
  };
  