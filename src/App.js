import {useState} from "react";
import "./styles/App.css"
import Form from "./components/Form/Form";
import TodoList from "./components/TodoList/TodoList";

function App() {
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || [])

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

    return (
        <div className="App">
            <Form addTodo={addTodo}/>
            <TodoList removeTodo={removeTodo} todos={todos}/>
        </div>
    );
}

export default App;
