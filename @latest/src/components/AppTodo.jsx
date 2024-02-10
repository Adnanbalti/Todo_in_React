import "../App.css";

function AppTodo() {
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col-6">
          <input type="text" placeholder="Enter todo here" className="inputText"/>
        </div>
        <div class="col-4">
          <input type="date" className="inputDate" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success">
            Add
          </button>
        </div>
      </div>
    </div>

    // <div class="row">
    //   <div class="col-sm-6">
    //     <input
    //       type="text"
    //       placeholder="Enter Todo here" className="inputtext"
    //     />
    //   </div>
    //   <div class="col-sm-4">
    //     <input type="date"  className="inputDate"/>
    //   </div>
    //   <div class="col-sm-2">
    //     <button type="button" class="btn btn-success">
    //       Add
    //     </button>
    //   </div>
    // </div>
  );
}

export default AppTodo;
