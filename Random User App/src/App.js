import React, { useEffect, useState } from "react";

/* import Footer from "./components/footer/Footer"; */

import axios from "axios";
import Header from "./components/Header";
import Card from "./components/Card";

const url = "https://randomuser.me/api/";

function App() {
  const [randomPerson, setRandomPerson] = useState([]);
  /* ASYNC FUNCTION WITH FETCH */
  /*  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    return data.results[0];
  };

  useEffect(() => {
    getData()
      .then((data) => setRandomPerson(data))
      .catch((err) => console.log(err.mese));
  }, []); */

  /* // AXIOS 
   axios.get(url).then((res) => console.log(res.data.results[0])); */

  /* ASYNC FUNCTION WITH AXIOS */
  const fetchData = async () => {
    const request = await axios.get(url);
    setRandomPerson([request.data.results[0]]);
    return request;
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(randomPerson);
  return (
    <main>
      <Header />
      <Card />
      {/* <div style={{ display: "flex", justifyContent: "center" }}>
        <Footer />
      </div> */}
    </main>
  );
}

export default App;
