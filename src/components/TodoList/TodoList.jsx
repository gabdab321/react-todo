import React from 'react';
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css"
import {CSSTransition, TransitionGroup} from "react-transition-group";

const TodoList = ({todos, removeTodo}) => {
    return (
        <div className="list">
            <h2>{todos.length === 0 ? "No todos yet." : "Your todos"}</h2>
            <TransitionGroup className="todo-list">
                {todos.map(todo =>
                    <CSSTransition timeout={500} classNames="todo-item" key={`${todo.body}-${todo.creationTime}`}>
                        <TodoItem removeTodo={removeTodo} todo={todo}/>
                    </CSSTransition>
                )}
            </TransitionGroup>

        </div>
    );
};

export default TodoList;