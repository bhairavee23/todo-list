import React, { useState } from 'react';
import { Todo } from './TodoContainer';

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { nanoid } from 'nanoid';

export interface TodoFormProps {
    addTodo(todo: Todo): void;
}

export enum Priority {
    HIGH = 'HIGH',
    MEDIUM = 'MEDIUM',
    LOW = 'LOW'
}
export const TodoForm = (props: TodoFormProps) => {

    const initialTodo : Todo = {
        id: nanoid(),
        todoLabel : '',
        todoPriority : Priority.MEDIUM,
        completed: false
    }

    const [todo, setTodo] = useState<Todo>(initialTodo);

    const submitTodo = () => {
        props.addTodo(todo);
        console.log(todo);
        setTodo(initialTodo);
    }

    return (
        <div className="w-50 mx-auto">
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <DropdownButton
                        as={InputGroup.Append} 
                        variant="outline-primary"
                        title={todo.todoPriority}
                        id="priority-dropdown"
                    >
                        <Dropdown.Item onClick={() => setTodo({...todo, todoPriority: Priority.HIGH})}>High</Dropdown.Item>
                        <Dropdown.Item onClick={() => setTodo({...todo, todoPriority: Priority.MEDIUM})}>Medium</Dropdown.Item>
                        <Dropdown.Item onClick={() => setTodo({...todo, todoPriority: Priority.LOW})}>Low</Dropdown.Item>
                    </DropdownButton>
                </InputGroup.Prepend>
                <FormControl
                name="todoLabel"
                value={todo.todoLabel}
                placeholder="What are you doing today?"
                aria-label="What are you doing today?"
                aria-describedby=""
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setTodo({...todo, todoLabel: e.target.value});
                }}
                onKeyUp={(e: React.KeyboardEvent<HTMLDivElement>) => {
                    if(e.key === 'Enter' && todo.todoLabel !== "") {
                        submitTodo();       
                    }
                }}
                />
                <InputGroup.Append>
                <Button variant="outline-success" onClick={submitTodo}>Add Todo</Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    )
}