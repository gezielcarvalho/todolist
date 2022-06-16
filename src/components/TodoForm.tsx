interface ITodoFormProps {
  onSubmit: any;
  onChange: any;
  value: string;
}

const TodoForm = ({ onSubmit, value, onChange }: ITodoFormProps) => {
  return (
    <>
      <input
        type="text"
        value={value}
        name="todo"
        placeholder="Type todo here"
        onChange={onChange}
      />
      <button onClick={onSubmit}>Create</button>
    </>
  );
};

export default TodoForm;
