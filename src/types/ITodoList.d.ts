import { ITodoItem } from './ITodoItem';

export interface ITodoList {
    todoList: ITodoItem[],
    toggleTodo: (id: number) => void,
}