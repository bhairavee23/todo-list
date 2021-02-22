import React from 'react';
import renderer from 'react-test-renderer';
import { Todo } from './TodoContainer';
import { Priority } from './TodoForm';
import TodoList from './TodoList';

describe('Test TodoList', () => {

    it("should match snapshot", ()=> {
        const tree = renderer.create(
            <TodoList
                todos={[]}
                deleteTodos={() => {}}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot(); 
    });     
    
    it("should have two todos", ()=> {
        const todoData: Todo[] = [{
            id: "1",
            todoLabel:"todo1",
            todoPriority: Priority.MEDIUM,
            completed: false
        }, {
            id: '2',
            todoLabel:"todo1",
            todoPriority: Priority.LOW,
            completed: false
        }]
        const tree = renderer.create(
            <TodoList
                todos={todoData}
                deleteTodos={() => {}}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot(); 
    });    
});