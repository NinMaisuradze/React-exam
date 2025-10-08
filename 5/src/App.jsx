import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../store/counterSlice";
import { addTodo, removeTodo, clearTodos } from "../store/todoSlice";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {

  const counter = useSelector((state) => state.counter.value);
  const todos = useSelector((state) => state.todo.items); 
  const dispatch = useDispatch();

 
  const increase = () => dispatch(increment());
  const decrease = () => dispatch(decrement());
  const resetCounter = () => dispatch(reset());

  const addNewTodo = () => {
    const text = prompt("შეიყვანეთ ახალი Todo");
    if (text) dispatch(addTodo(text));
  };
  const removeTask = (id) => dispatch(removeTodo(id));
  const clearAllTasks = () => dispatch(clearTodos());

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Redux + React Demo</h1>

      <section>
        <h2>Counter: {counter}</h2>
        <button onClick={increase}>+1</button>
        <button onClick={decrease}>-1</button>
        <button onClick={resetCounter}>Reset</button>
      </section>

      <hr />

      <section>
        <h2>Todos</h2>
        <button onClick={addNewTodo}>Add Todo</button>
        <button onClick={clearAllTasks}>Clear All</button>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.text}{" "}
              <button onClick={() => removeTask(todo.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
