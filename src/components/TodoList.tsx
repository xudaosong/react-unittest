import React from 'react';
import { observer } from 'mobx-react-lite';
import TodoItem from './TodoItem';
import { ITodoList } from '../types';

const TodoList: React.FC<ITodoList> = observer(({ todoList, toggleTodo }) => (
    <ul>
        {todoList.map(item => (
            <li key={item.id} onClick={() => { toggleTodo(item.id) }}>
                <TodoItem {...item}></TodoItem>
            </li>
        ))}
    </ul>
))

export default TodoList;