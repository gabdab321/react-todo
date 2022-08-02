import React, {useState} from 'react';
import cl from "./TodoItem.module.css"
import {MdOutlineDone} from "react-icons/md";
import {BsTrash} from "react-icons/bs";

const TodoItem = ({isDone, todo, doneTodo, removeTodo}) => {
    if(isDone) {
        return(
            <div className={[cl.todo, cl.done].join(" ")}>
                <p>{todo.body}</p>
            </div>
        )
    }

    return (
        <div className={cl.todo}>
            <p>{todo.body}</p>
            <div className={cl.button__container}>
                <button onClick={() => removeTodo(todo)} className={cl.remove_button}><BsTrash /></button>
                <button onClick={() => doneTodo(todo)} className={cl.done__button}><MdOutlineDone/></button>
            </div>
        </div>
    );
};

export default TodoItem;