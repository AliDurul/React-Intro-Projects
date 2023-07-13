import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./compenents/Header";
import TdoList from "./compenents/TdoList";
import { useState } from "react";
function App() {
  const [todos, setTodos] = useState([]);
  console.log(todos);
  return (
    <div className="App text-center ">
      <Header setTodos={setTodos} todos={todos} />
      <TdoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
