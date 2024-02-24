import { useState } from "react";
import style from "./AddTodo.module.css";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState();

  const [todoDate, setTodoDate] = useState();

  const handleChangeName = (event) => {
    console.log(event.target.value);
    setTodoName(event.target.value);
  };

  const handleChangeDate = (event) => {
    console.log(event.target.value);
    setTodoDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, todoDate);
    setTodoName("")
    setTodoDate("")    
  };

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter todo here"
            className={style["inputText"]}
            value={todoName}
            onChange={handleChangeName}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            className={style["inputDate"]}
            value={todoDate}
            onChange={handleChangeDate}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className={`${style["btn"]} btn btn-success`}
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
