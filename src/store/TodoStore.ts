import { observable, action } from 'mobx'
import { ITodoItem } from "../types";
import produce from "immer";

class TodoStore {
    @observable todoList: Array<ITodoItem> = [
        { id: 0, text: 'task 1', completed: true },
        { id: 1, text: 'task 2', completed: false }
    ];

    @action toggleTodo = (id: number): void => {
        const index = this.todoList.findIndex((item) => {
            return item.id === id;
        });
        // this.todoList[index].completed = !this.todoList[index].completed;
        const list = produce(this.todoList, draftState => {
            draftState[index].completed = !draftState[index].completed;
        })
        console.log(list === this.todoList)
    }
}

export default new TodoStore();