import React from 'react';
import {Button, Collapse} from "@nextui-org/react";
import TodoItem from "../TodoItem/TodoItem";
import cl from "./SubTodoList.module.css"

const SubTodoList = ({todos, clearFunction, clearButtonLabel, title, emptyTitle}) => {

    return (
        <Collapse bordered className={cl.sublist} title={title}>
            {todos.length === 0 ?
                <p style={{textAlign: "center"}}>{emptyTitle}</p>
                :
                <>
                    <Button onClick={clearFunction} className={cl.clear__button} shadow color="error">{clearButtonLabel}</Button>
                    {todos.map(todo => {
                        return(<TodoItem
                            isFailed={todo.isFailed}
                            isDone={todo.isDone}
                            key={`${todo.body}-${todo.creationTime}`}
                            todo={todo}
                        />)
                    })}
                </>
            }
        </Collapse>
    );
};

export default SubTodoList;