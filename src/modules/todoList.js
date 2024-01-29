import { useSelector, useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../store/actions/todos-actions";
import {allTodos, activeTodos} from '../store/selectors/todos-selector'


export const TodoList = () => {
    const todos = useSelector(activeTodos);
    const dispatch = useDispatch();
  
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
  