import React, {useState} from 'react';
import cl from "./Form.module.css"

const Form = ({addTodo}) => {
    const [newTodo, setNewTodo] = useState("")

    function createTodo(e) {
        e.preventDefault()
        addTodo(newTodo)
        setNewTodo("")
    }

    return (
        <>
            <form className={cl.form}>
                <h2 className={cl.form__header}>Create new todo</h2>
                <input
                    className={cl.form__input}
                    type="text"
                    placeholder="Title"
                    value={newTodo}
                    onChange={e => setNewTodo(e.target.value)}
                />
                <button className={cl.form__button} onClick={createTodo}>+</button>
            </form>
        </>
    );
};

export default Form;