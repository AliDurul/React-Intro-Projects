import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";

import "./sass/_reset.scss"

import "./app.scss"
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Main />
    </>
  );
}

export default App;
