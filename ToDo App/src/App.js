import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./compenents/Header";
import TdoList from "./compenents/TdoList";
import { useState } from "react";
function App() {
  

  const [todos, setTodos] = useState([]);
console.log(`todos: ${todos.length}`);
  return (
    <div className="App text-center ">
      <Header  setTodos={setTodos} todos={todos} />
      <div className=" container d-flex flex-column mt-5 border-top justify-content-center  ">
        {todos.map((item) => (
          <TdoList key = {item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
