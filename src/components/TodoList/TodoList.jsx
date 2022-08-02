import React from 'react';
import TodoItem from "../TodoItem/TodoItem";
import cl from "./TodoList.module.css"

const TodoList = ({todos, removeTodo}) => {
    return (
        <div className={cl.list}>
            {todos.length === 0
                ?
                <h2>No todos yet.</h2>
                :
                todos.map(todo => <TodoItem key={todo} removeTodo={removeTodo} body={todo}/>)
            }
        </div>
    );
};

export default TodoList;