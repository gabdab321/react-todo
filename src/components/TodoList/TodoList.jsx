import React, {useContext} from 'react';
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css"
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {Context} from "../../context/context";

const TodoList = ({todos, doneTodo, doneTodos, removeTodo}) => {
    const {showDone} = useContext(Context)

    return (
        <div className="list">
            {showDone ?
                <>
                    <h2>{doneTodo.length === 0 ? "" : "Todos you have been done yet"}</h2>
                    {doneTodos.map(todo =>
                        <TodoItem
                            isDone={true}
                            key={`${todo.body}-${todo.creationTime}`}
                            removeTodo={removeTodo}
                            doneTodo={doneTodo}
                            todo={todo}
                        />)}
                </>
                :
                <div/>
            }


            <h2>{todos.length === 0 ? "You do not have any todos" : "Your todos"}</h2>
            <TransitionGroup className="todo-list">
                {todos.map(todo =>
                    <CSSTransition timeout={500} classNames="todo-item" key={`${todo.body}-${todo.creationTime}`}>
                        <TodoItem isDone={false} removeTodo={removeTodo} doneTodo={doneTodo} todo={todo}/>
                    </CSSTransition>
                )}
            </TransitionGroup>

        </div>
    );
};

export default TodoList;