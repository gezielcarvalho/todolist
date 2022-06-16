interface ITodoListItemsProps {
  data?: string[] | null;
  onDelete: any
}

const TodoListItems = 
      ({ data, onDelete }: ITodoListItemsProps) => 
        <ul className="list-group">
          {data && data.map((item, index) => 
          <li 
              className="list-group-item"
              key={index}>
            {item}
            <button className="btn btn-danger" onClick={()=>onDelete(index)}>X</button>
          </li>
            )}
        </ul>;

export default TodoListItems;
