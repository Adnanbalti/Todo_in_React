import style from './TodoItems.module.css'
import TodoItem from "./TodoItem"

const TodoItems = ({ todoItems }) => {
  return (
  <div className={style["items-container"]}>
    {todoItems.map((item) => <TodoItem key={item} todoName={item.name} todoDate={item.dueDate} />)}
   </div>
  );
}

export default TodoItems;