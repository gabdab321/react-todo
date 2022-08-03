import React, {useContext} from 'react';
import cl from "./TodoItem.module.css"
import {MdOutlineDone} from "react-icons/md";
import {BsTrash} from "react-icons/bs";
import {Context} from "../../context/context";
import MyModal from "../ui/MyModal/MyModal";

const TodoItem = ({isFailed, isDone, todo}) => {
    const {visible, setVisible, doneTodo, removeTodo} = useContext(Context)

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
            <MyModal
                onClose={() => setVisible(false)}
                open={visible}
                onDelete={() => {
                    removeTodo(todo)
                    setVisible(false)
                }}
                onCancel={() => setVisible(false)}
            />

            <p>{todo.body}</p>
            <div className={cl.button__container}>
                <button onClick={() => setVisible(true)} className={cl.remove_button}><BsTrash /></button>
                <button onClick={() => doneTodo(todo)} className={cl.done__button}><MdOutlineDone/></button>
            </div>
        </div>
    );
};

export default TodoItem;