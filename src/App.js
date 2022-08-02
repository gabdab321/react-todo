import React, {createContext, useMemo, useState} from "react";
import "./styles/App.css"
import Form from "./components/Form/Form";
import TodoList from "./components/TodoList/TodoList";
import {Context} from "./context/context";
import {Button, Modal} from "@nextui-org/react";

function App() {
    const [visible, setVisible] = useState(false)
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || [])
    const [doneTodos, setDoneTodos] = useState(JSON.parse(localStorage.getItem("doneTodos")) || [])
    const [showDone, setShowDone] = useState(true)

    function addTodo(newTodo) {
        if(newTodo.body === "") {
            return false
        }

        setTodos([...todos, newTodo])
        localStorage.setItem("todos", JSON.stringify([...todos, newTodo]))
    }

    function removeTodo(todo) {
        setTodos(todos.filter(item => item !== todo))
        localStorage.setItem("todos", JSON.stringify(todos.filter(item => item !== todo)))
    }

    function doneTodo(todo) {
        setTodos(todos.filter(item => item !== todo))
        setDoneTodos([...doneTodos, todo])
        localStorage.setItem("doneTodos", JSON.stringify([...doneTodos, {...todo, isDone: true}]))
    }

    return (
        <Context.Provider value={{
            showDone,
            setShowDone,
            visible,
            setVisible
        }}>

            <div className="App">
                <Form addTodo={addTodo}/>
                <TodoList doneTodos={doneTodos} removeTodo={removeTodo} todos={todos} doneTodo={doneTodo}/>
            </div>
        </Context.Provider>
    );
}

export default App;
