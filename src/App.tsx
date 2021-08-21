import axios from "axios";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState<any>([]);

  const onClickFetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setTodos(res.data);
    });
  };

  return (
    <div className="App">
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todos) => (
        <p>{todos.title}</p>
      ))}
    </div>
  );
}
