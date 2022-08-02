import React from 'react';
import cl from "./TodoItem.module.css"

const TodoItem = ({body, removeTodo}) => {
    return (
        <div className={cl.todo}>
            <p>{body}</p>
            <button onClick={() => removeTodo(body)} className={cl.remove_button}>🗑</button>
        </div>
    );
};

export default TodoItem;