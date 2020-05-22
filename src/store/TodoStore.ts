import { createContext } from 'react';
import { observable, action } from 'mobx'
import { ITodoItem } from "../types";
import produce from "immer";

class TodoStore {
    @observable todoList: Array<ITodoItem> = [
        { id: 0, text: 'task 1', completed: true },
        { id: 1, text: 'task 2', completed: false }
    ];

    @action toggleTodo = (id: number): void => {
        console.log(id)
        const index = this.todoList.findIndex((item) => {
            return item.id === id;
        });
        produce(this.todoList, draftState => {
            debugger
            draftState[index].completed = !draftState[index].completed;
        })
    }
}

export default createContext(new TodoStore());