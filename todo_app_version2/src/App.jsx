import React, { useState } from "react";
import AppName from "./components/AppName.jsx";
import AddTodo from "./components/AddTodo.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoItems from "./components/TodoItems.jsx";
import WelcomeMessage from "./components/WelcomeMessage.jsx";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    setTodoItems([...todoItems, {name: itemName, dueDate: itemDueDate}])
  };

  const handleDeleteButton = (todoItemName) => {
    const newTodoItem = todoItems.filter((item) => item.name !== todoItemName)
    setTodoItems(newTodoItem)
    // console.log(`Deleted item name: ${todoItemName}`);
  }

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteButton} />
    </center>
  );
}

export default App;
