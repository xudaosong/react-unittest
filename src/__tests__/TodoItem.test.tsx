import React from 'react';
import { shallow } from 'enzyme';

import TodoItem from '../components/TodoItem';

describe('TodoItem', () => {
    const props = {
        id: 0,
        text: 'task 1',
        completed: false
    }
    const props2 = {
        id: 0,
        text: 'task 1',
        completed: true
    }
    test('Todo: Render Todo List', () => {
        const wrapper = shallow(<TodoItem {...props} />);
        expect(wrapper.text()).toEqual(props.text);
        const wrapper2 = shallow(<TodoItem {...props2} />);
        expect(wrapper2.text()).toEqual('task 1 completed');
    });
});