import React from 'react';
import renderer from 'react-test-renderer';
import { TodoContainer } from './TodoContainer';


describe('Test TodoContainer', () => {

    it("should match snapshot", ()=> {
        const tree = renderer.create(
            <TodoContainer/>
        ).toJSON();
        expect(tree).toMatchSnapshot(); 
    });       
});