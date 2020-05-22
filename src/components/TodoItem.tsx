import React from 'react';
import { ITodoItem } from '../types';

const TodoItem: React.FC<ITodoItem> = ({ id, text, completed }) => {
    return (<div>{text}{completed && ' completed'}</div>);
}

export default TodoItem;