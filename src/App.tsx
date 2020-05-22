import React, { useContext } from 'react';
import todoContext from './store/TodoStore';
import TodoList from './components/TodoList';

function App() {
  const todoStore = useContext(todoContext);
  console.log('todoStore', todoStore)
  return (
    <div>
      <h6>Todo</h6>
      <TodoList todoList={todoStore.todoList} toggleTodo={todoStore.toggleTodo} />
    </div>
  )
}

export default App;
