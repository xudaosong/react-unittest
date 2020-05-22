import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import TodoList from '../components/TodoList';
import { ITodoList } from "../types";

let container: Element = document.createElement("div");
beforeEach(() => {
    // 创建一个 DOM 元素作为渲染目标
    document.body.appendChild(container);
});

afterEach(() => {
    // 退出时进行清理
    unmountComponentAtNode(container);
    container.remove();
    container = document.createElement("div");
});

describe('TodoList', () => {
    const list: ITodoList = {
        todoList: [
            { id: 1, text: 'task 1', completed: true },
            { id: 2, text: 'task 2', completed: false },
        ],
        toggleTodo: jest.fn(),
    }
    it('Render UI', () => {
        act(() => {
            render(<TodoList {...list} />, container);
        });
        expect(container.querySelectorAll('li').length).toBe(2);
        let index: number = 0;
        expect(container.querySelectorAll('li')[index]?.textContent).toEqual(`${list.todoList[index].text}${list.todoList[index].completed ? ' completed' : ''}`);
        index = 1;
        expect(container.querySelectorAll('li')[index]?.textContent).toEqual(`${list.todoList[index].text}${list.todoList[index].completed ? ' completed' : ''}`);
    });
    it('Todo Toggle', () => {
        act(() => {
            render(<TodoList {...list} />, container);
        });

        let index: number = 0;
        let li: Element = container.querySelectorAll('li')[index];
        expect(li.textContent).toEqual(`${list.todoList[index].text}${list.todoList[index].completed ? ' completed' : ''}`);
        expect(list.toggleTodo).toHaveBeenCalledTimes(0);

        act(() => {
            li.dispatchEvent(new MouseEvent("Click", { bubbles: true }));
        });
        expect(list.toggleTodo).toHaveBeenCalledTimes(1);
    });
});