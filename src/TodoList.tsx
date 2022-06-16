import React, { useState } from 'react';
import './App.css';

const TodoList = () => {

  const [items, setItems] = useState<string[] | null>([]);
  const [text, setText] = useState('');

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
  }

  const handleSubmit = () => {
    const currentItems = items || [];
    currentItems.push(text);
    setItems(currentItems);
    setText('');
  }

  return (
    <div>
      <input type='text' value={text}  name='todo' placeholder='Type todo here' onChange={handleChange}/>
      <button onClick={handleSubmit}>Create</button>
      <hr />
      <ul>
        {items && items.map((item, index)=><li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}

export default TodoList;
