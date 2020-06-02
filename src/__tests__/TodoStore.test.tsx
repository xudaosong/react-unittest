import 'mobx-react-lite/batchingForReactDom';

import TodoStore from '../store/TodoStore';

describe('TodoStore', () => {
    it('toggle todo', () => {
        expect(TodoStore.todoList[0].completed).toBeTruthy();
        TodoStore.toggleTodo(0)
        expect(TodoStore.todoList[0].completed).toBeFalsy();
    });
});