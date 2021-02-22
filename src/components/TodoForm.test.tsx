import React from 'react';
import renderer from 'react-test-renderer';
import { TodoForm } from './TodoForm';

describe('Test TodoForm', () => {

    it("should match snapshot", ()=> {
        const tree = renderer.create(
            <TodoForm
                addTodo={() => {}}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot(); 
    });       
});