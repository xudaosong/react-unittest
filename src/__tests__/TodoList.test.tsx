import React from "react";

import { shallow } from 'enzyme';
import 'mobx-react-lite/batchingForReactDom';

import TodoList from '../components/TodoList';
import { ITodoList } from "../types";

describe('TodoList', () => {
    const props: ITodoList = {
        todoList: [
            { id: 1, text: 'task 1', completed: true },
            { id: 2, text: 'task 2', completed: false },
        ],
        toggleTodo: jest.fn(),
    }

    it('Render UI', () => {
        const todoList = shallow(<TodoList {...props} />);
        expect(todoList.find("TodoItem")).toHaveLength(2);
        expect(todoList.find("TodoItem").get(0).props.text).toEqual(props.todoList[0].text);
        expect(todoList.find("TodoItem").get(0).props.completed).toBeTruthy();
        expect(todoList.find("TodoItem").get(1).props.text).toEqual(props.todoList[1].text);
        expect(todoList.find("TodoItem").get(1).props.completed).toBeFalsy();
    });

    it('Click Todo',()=>{
        const todoList = shallow(<TodoList {...props} />);
        expect(props.toggleTodo).not.toHaveBeenCalled();
        todoList.find('li').at(0).simulate('click');
        expect(props.toggleTodo).toHaveBeenCalledTimes(1);
        todoList.find('li').at(1).simulate('click');
        expect(props.toggleTodo).toHaveBeenCalledTimes(2);
        for (let i = 0; i < 5; i++) {
            todoList.find('li').at(0).simulate('click');
        }
        expect(props.toggleTodo).toHaveBeenCalledTimes(7);
    });

});