import React from 'react';
import cl from "./TodoItem.module.css"
import {MdOutlineDone} from "react-icons/md";
import {BsTrash} from "react-icons/bs";

const TodoItem = ({todo, removeTodo}) => {

    function doneTodo() {

    }

    return (
        <div className={cl.todo}>
            <p>{todo.body}</p>
            <div className={cl.button__container}>
                <button onClick={() => removeTodo(todo)} className={cl.remove_button}><BsTrash /></button>
                <button className={cl.done__button}><MdOutlineDone/></button>
            </div>
        </div>
    );
};

export default TodoItem;