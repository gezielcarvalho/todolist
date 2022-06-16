import "../App.css";
import TodoForm from "./TodoForm";
import TodoListItems from "./TodoListItems";

interface ITodoListProps {
  handleChange: any;
  handleSubmit: any;
  handleRemove: any;
  text: string;
  items: string[] | null;
}

const TodoList = ({
  handleChange,
  handleSubmit,
  handleRemove,
  text,
  items,
}: ITodoListProps) => {
  return (
    <>
      <TodoForm onChange={handleChange} onSubmit={handleSubmit} value={text} />
      <TodoListItems data={items} onDelete={handleRemove} />
    </>
  );
};

export default TodoList;
