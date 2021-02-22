import React, { useEffect, useState } from 'react';
import { Todo } from './TodoContainer'; 

import './styles/TodoList.css';
import { Button, FormControl, InputGroup } from 'react-bootstrap';

interface TodoListProps {
    todos: Todo[];
    deleteTodos(todos: Todo[]): void;
}

const TodoList = (props: TodoListProps) => {

    const {todos, deleteTodos} = props;
    const [currentTodos, setCurrentTodos] = useState<Todo[]>(todos);
    const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

    useEffect(() => {
        setCurrentTodos(todos);
        setCompletedTodos([]);
    },[todos]);

    const deleteTodo = (t: Todo) => {
        if(completedTodos.length > 0) {
            deleteTodos(completedTodos);
        } else {
            t.completed = !t.completed;
            deleteTodos([t]);
        }
    }

    return (
        
        <div className={'w-50 mx-auto my-4'}>
            <div className="py-3"><h4>Todo List: </h4></div>
            {(currentTodos.length <= 0) ? 
                <div>All things on this list are done!</div> 
            : (
                currentTodos.map((t) => (
                    <div>
                        <InputGroup className="mb-3" key={t.id} id={t.id}>
                            <InputGroup.Prepend>
                                <InputGroup.Checkbox 
                                    aria-label="Checkbox for todo"
                                    key={t.todoLabel}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                        if(e.target.checked) {
                                            t.completed  = true;
                                            setCompletedTodos([...completedTodos, t]);
                                        } else {
                                            t.completed  = false;
                                            setCompletedTodos(completedTodos.filter(todo => todo !== t));
                                        }
                                    }}
                                />
                            </InputGroup.Prepend>
                            <InputGroup.Prepend>
                                <InputGroup.Text className="priority" id="priority">{t.todoPriority}</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                            name="todoLabel"
                            value={t.todoLabel}
                            placeholder="What are you doing today?"
                            aria-label="What are you doing today?"
                            // onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            //     setTodo({...todo, todoLabel: e.target.value});
                            // }}
                            // onKeyUp={(e: React.KeyboardEvent<HTMLDivElement>) => {
                            //     if(e.key === 'Enter' && todo.todoLabel !== "") {
                            //         submitTodo();       
                            //     }
                            // }}
                            />
                            <InputGroup.Append>
                            <Button variant="outline-danger" 
                                onClick={() => deleteTodo(t)}
                            >
                                Completed
                            </Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </div>
                ))
            )
            }
        </div>
    )
};

export default TodoList;   