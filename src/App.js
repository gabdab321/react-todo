import React, {useState} from "react";
import "./styles/App.css"
import Form from "./components/Form/Form";
import TodoList from "./components/TodoList/TodoList";
import {Context} from "./context/context";

function App() {
    const [visible, setVisible] = useState(false)
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || [])
    const [doneTodos, setDoneTodos] = useState(JSON.parse(localStorage.getItem("doneTodos")) || [])
    const [failedTodos, setFailedTodos] = useState(JSON.parse(localStorage.getItem("failedTodos")) || [])

    function addTodo(newTodo) {
        if(newTodo.body === "") {
            return false
        }

        setTodos([...todos, newTodo])
        localStorage.setItem("todos", JSON.stringify([...todos, newTodo]))
    }

    function removeTodo(todo) {
        setTodos(todos.filter(item => item !== todo))
        setFailedTodos([...failedTodos, {...todo, isFailed: true}])
        localStorage.setItem("todos", JSON.stringify(todos.filter(item => item !== todo)))
        localStorage.setItem("failedTodos", JSON.stringify([...failedTodos, {...todo, isFailed: true}]))
    }

    function doneTodo(todo) {
        setTodos(todos.filter(item => item !== todo))
        setDoneTodos([...doneTodos, {...todo, isDone: true}])
        localStorage.setItem("todos", JSON.stringify(todos.filter(item => item !== todo)))
        localStorage.setItem("doneTodos", JSON.stringify([...doneTodos, {...todo, isDone: true}]))
    }

    return (
        <Context.Provider value={{
            visible,
            setVisible,
            addTodo,
            removeTodo,
            doneTodo
        }}>

            <div className="App">
                <Form addTodo={addTodo}/>
                <TodoList
                    failedTodos={failedTodos}
                    setFailedTodos={setFailedTodos}
                    doneTodos={doneTodos}
                    setDoneTodos={setDoneTodos}
                    removeTodo={removeTodo}
                    todos={todos}
                    doneTodo={doneTodo}/>
            </div>
        </Context.Provider>
    );
}

export default App;
