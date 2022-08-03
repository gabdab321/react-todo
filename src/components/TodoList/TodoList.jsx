import React from 'react';
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css"
import {CSSTransition, TransitionGroup} from "react-transition-group";
import SubTodoList from "../SubTodoList/SubTodoList";

const TodoList = ({todos, setFailedTodos, failedTodos, setDoneTodos, doneTodos}) => {
    function clearFailedTodos() {
        setFailedTodos([])
        localStorage.setItem("failedTodos", JSON.stringify([] ))
    }

    function clearDoneTodos() {
        setDoneTodos([])
        localStorage.setItem("doneTodos", JSON.stringify([] ))
    }

    return (
        <div className="list">
            <SubTodoList
                todos={failedTodos}
                title="Todos you have been failed"
                emptyTitle="There are no failed todos"
                clearFunction={clearFailedTodos}
                clearButtonLabel="Clear failed tasks"
            />
            <SubTodoList
                todos={doneTodos}
                title="Todos you have been done yet"
                emptyTitle="There are no done todos"
                clearFunction={clearDoneTodos}
                clearButtonLabel="Clear done tasks"
            />

            <h2 style={{margin:"20px 0"}}>{todos.length === 0 ? "You do not have any todos" : "Your todos"}</h2>
            <TransitionGroup className="todo-list">
                {todos.map(todo =>
                    <CSSTransition timeout={500} classNames="todo-item" key={`${todo.body}-${todo.creationTime}`}>
                        <TodoItem isDone={false} isFailed={false} todo={todo}/>
                    </CSSTransition>
                )}
            </TransitionGroup>

        </div>
    );
};

export default TodoList;