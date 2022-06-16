import { FormEvent, useState } from "react";
import Message, { WelcomeMessage } from "../components/Message";
import TodoList from "../components/TodoList";
import ContainerApp from "./ContainerApp";

const TodoListApp = () => {
  const [items, setItems] = useState<string[] | null>([]);
  const [text, setText] = useState("");

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
  };

  const handleSubmit = () => {
    const currentItems = items;
    currentItems?.push(text);
    setItems(currentItems);
    setText("");
  };

  const handleRemove = (index: number) => {
    const currentItems = items;
    currentItems?.splice(index, 1);
    currentItems?.push("removed " + index);
    console.log(currentItems);
    setItems(currentItems);
    setText("");
  };

  return (
    <ContainerApp>
      <Message title="Todo Title"/>
      <WelcomeMessage/>
      <TodoList
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleRemove={handleRemove}
        text={text}
        items={items}
      />
    </ContainerApp>
  );
};

export default TodoListApp;
