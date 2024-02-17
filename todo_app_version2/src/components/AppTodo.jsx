import style from "./AppTodo.module.css";

function AppTodo() {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">
          <input type="text" placeholder="Enter todo here" className={style["inputText"]}/>
        </div>
        <div className="col-4">
          <input type="date" className={style["inputDate"]} />
        </div>
        <div className="col-2">
          <button type="button" className={`${style["btn"]} btn btn-success`}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppTodo;
