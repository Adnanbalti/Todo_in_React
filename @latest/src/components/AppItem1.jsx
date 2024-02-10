import "../App.css";

function AppItem1() {
    let text1 = 'Take Milk';
    let date = '07 Feb, 2024';

  return (
    <div class="container">
      <div class="row">
        <div class="col-6">{text1}</div>
        <div class="col-4">{date}</div>
        <div class="col-2">
        <button type="button" class="btn btn-danger">
          Delete 
        </button>
        </div>
      </div>
    </div>
  );
}

export default AppItem1;
