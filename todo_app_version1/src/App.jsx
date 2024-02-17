import React from "react";
import AppName from "./components/AppName.jsx";
import AppTodo from "./components/AppTodo.jsx";
import AppItem1 from "./components/AppItem1.jsx";
import AppItem2 from "./components/AppItem2.jsx";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <center className='todo-container'>
      <AppName />
      <AppTodo />
      <div className="item-container">
        <AppItem1></AppItem1>
        <AppItem2></AppItem2>
      </div>
    </center>
  );
}

export default App;
