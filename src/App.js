
import {NewTodo} from './modules/newNodo';
import {TodoList} from './modules/todoList';
import {Filters} from './modules/Flters';

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello Redux Todo</h1>
      <NewTodo />
      <Filters />
      <TodoList />
    </div>
  );
}



