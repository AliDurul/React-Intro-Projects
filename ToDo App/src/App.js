import Header from "./compenents/Header";
import TdoList from "./compenents/TdoList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import { useState } from "react";

function App() {

  const [todos, setTodos] = useState([]);
  
  return (
    <div className="App text-center ">
      <Header setTodos={setTodos} todos={todos} />
      <TdoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
