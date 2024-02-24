import style from './TodoItems.module.css'
import TodoItem from "./TodoItem"

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
  <div className={style["items-container"]}>
    {todoItems.map((item) => <TodoItem key={item} todoName={item.name} todoDate={item.dueDate} onDeleteClick={onDeleteClick} />)}
   </div>
  );
}

export default TodoItems;