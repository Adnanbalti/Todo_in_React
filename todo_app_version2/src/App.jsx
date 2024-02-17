import React from "react";
import AppName from "./components/AppName.jsx";
import AppTodo from "./components/AppTodo.jsx";
// import TodoItem from "./components/TodoItem.jsx"
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoItems from "./components/TodoItems.jsx";

function App() {
  const todoItem = [{
    name: 'Take Protien',
    dueDate: '07 Feb, 2024'
  },
  { name: 'Do Gym',
    dueDate: '07 Feb, 2024'
  }
]
  return (
    <center className='todo-container'>
      <AppName />
      <AppTodo />
      <TodoItems todoItems={todoItem} />
    </center>
  );
}

export default App;
