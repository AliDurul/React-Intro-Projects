import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./compenents/Header";
import Questions from "./compenents/Questions";

import questions from "./helpers/data";
import "./App.css"
function App() {
  return (
    <div className="">
      <Header />
      <div className="container parent_cards ">
        {questions.map((que) => (
          <Questions item={que} />
        ))}
      </div>
    </div>
  );
}

export default App;

