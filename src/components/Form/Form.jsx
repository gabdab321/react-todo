import React, {useState} from 'react';
import cl from "./Form.module.css"

const Form = ({addTodo}) => {
    const [newTodo, setNewTodo] = useState({body: "", isDone: false, isFailed: false, creationTime: Date.now()})

    function createTodo(e) {
        e.preventDefault()
        addTodo(newTodo)
        setNewTodo({body: "", isDone: false, isFailed: false, creationTime: Date.now()})
    }

    return (
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
    );
};

export default Form;