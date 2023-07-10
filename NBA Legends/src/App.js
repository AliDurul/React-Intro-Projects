import CardContainer from "./compenents/CardContainer";
import Header from "./compenents/Header";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./sass/style.scss"
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("")
  return (
    <>
      <Header setQuery={setQuery}/>
      <CardContainer query={query.toLocaleLowerCase()} />
    </>
  );
}

export default App;
