import React, {useContext, useState} from 'react';
import cl from "./TodoItem.module.css"
import {MdOutlineDone} from "react-icons/md";
import {BsTrash} from "react-icons/bs";
import {Button, Modal} from "@nextui-org/react";
import {Context} from "../../context/context";

const TodoItem = ({isFailed, isDone, todo, doneTodo, removeTodo}) => {
    const {visible, setVisible} = useContext(Context)

    if(isDone) {
        return(
            <div className={[cl.todo, cl.done].join(" ")}>
                <p>{todo.body}</p>
            </div>
        )
    }

    if(isFailed) {
        return(
            <div className={[cl.todo, cl.failed].join(" ")}>
                <p>{todo.body}</p>
            </div>
        )
    }

    return (
        <div className={cl.todo}>
            <Modal
                className="modal"
                onClose={() => setVisible(false)}
                blur
                animated
                open={visible}
            >
                <p>Are you sure that you want to delete this task?</p>
                <div className="modal__button-container">
                    <Button onPress={() => {
                        removeTodo(todo)
                        setVisible(false)
                    }} shadow color="error" auto>Delete</Button>
                    <Button onPress={() => setVisible(false)} shadow color="primary" auto>Cancel</Button>
                </div>
            </Modal>

            <p>{todo.body}</p>
            <div className={cl.button__container}>
                <button onClick={() => setVisible(true)} className={cl.remove_button}><BsTrash /></button>
                <button onClick={() => doneTodo(todo)} className={cl.done__button}><MdOutlineDone/></button>
            </div>
        </div>
    );
};

export default TodoItem;