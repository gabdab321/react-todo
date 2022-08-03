import React, {useContext} from 'react';
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css"
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {Button, Collapse} from "@nextui-org/react";

const TodoList = ({setFailedTodos, failedTodos, todos, doneTodo, setDoneTodos, doneTodos, removeTodo}) => {

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
            <Collapse bordered className="sublist" title="Todos you have been failed">
                {failedTodos.length === 0 ?
                    <p style={{textAlign: "center"}}>There are no failed todos</p>
                    :
                    <>
                        <Button onClick={clearFailedTodos} className="clear-button" shadow color="error">Clear failed
                            tasks</Button>
                        {failedTodos.map(todo =>
                            <TodoItem
                                isFailed={true}
                                isDone={false}
                                key={`${todo.body}-${todo.creationTime}`}
                                removeTodo={removeTodo}
                                doneTodo={doneTodo}
                                todo={todo}
                            />)}
                    </>
                }
            </Collapse>

            <Collapse bordered className="sublist" title="Todos you have been done yet">
                {doneTodos.length === 0 ?
                    <p style={{textAlign: "center"}}>There are no done todos</p>
                    :
                    <>
                        <Button onClick={clearDoneTodos} className="clear-button" shadow color="success">Clear done
                            tasks</Button>
                        {doneTodos.map(todo =>
                            <TodoItem
                                isFailed={false}
                                isDone={true}
                                key={`${todo.body}-${todo.creationTime}`}
                                removeTodo={removeTodo}
                                doneTodo={doneTodo}
                                todo={todo}
                            />)}
                    </>
                }
            </Collapse>

            <h2 style={{margin:"20px 0"}}>{todos.length === 0 ? "You do not have any todos" : "Your todos"}</h2>
            <TransitionGroup className="todo-list">
                {todos.map(todo =>
                    <CSSTransition timeout={500} classNames="todo-item" key={`${todo.body}-${todo.creationTime}`}>
                        <TodoItem isDone={false} isFailed={false} removeTodo={removeTodo} doneTodo={doneTodo} todo={todo}/>
                    </CSSTransition>
                )}
            </TransitionGroup>

        </div>
    );
};

export default TodoList;