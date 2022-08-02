import React, {useContext, useState} from 'react';
import cl from "./Form.module.css"
import {Switch} from "@nextui-org/react";
import {Context} from "../../context/context";

const Form = ({addTodo}) => {
    const {showDone, setShowDone} = useContext(Context)
    const [newTodo, setNewTodo] = useState({body: "", isDone: false, isFailed: false, creationTime: Date.now()})

    function createTodo(e) {
        e.preventDefault()
        addTodo(newTodo)
        setNewTodo({body: "", isDone: false, isFailed: false, creationTime: Date.now()})
    }

    return (
        <>
            <form className={cl.form}>
                <h2 className={cl.form__header}>Create new todo</h2>
                <input
                    className={cl.form__input}
                    type="text"
                    placeholder="Title"
                    value={newTodo.body}
                    onChange={e => setNewTodo({...newTodo, body: e.target.value})}
                />
                <button className={cl.form__button} onClick={createTodo}>+</button>
            </form>
            <p className={cl.switch__label}>Show done todos</p>
            <Switch className={cl.switch} checked={showDone} onChange={() => setShowDone(!showDone)}/>
        </>
    );
};

export default Form;