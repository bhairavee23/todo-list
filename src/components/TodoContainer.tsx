import React, { useState } from 'react';
import { TodoForm } from './TodoForm';
import TodoList from './TodoList';

export interface Todo {
    id: string;
    todoLabel: string;
    todoPriority: string;
    completed: boolean;
}

export const TodoContainer = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo = (todo: Todo) => {
        setTodos([...todos, todo]);
        console.log("this was the new todo : "+todo);
    }

    const deleteTodos = (completedTodos: Todo[]) => {
        console.log(completedTodos);
        console.log(todos.filter(todo => !completedTodos.includes(todo)));
        setTodos(todos.filter(todo => !completedTodos.includes(todo)));
    }
    
    return (
        <div className="p-5">
            <TodoForm addTodo={addTodo}/>
            <TodoList todos={todos} deleteTodos={deleteTodos}/>
        </div>
    )
}