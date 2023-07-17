import { useEffect, useState } from "react";
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios"
const Home = () => {

  const [tutorials, setTutorials] = useState()

 

  const getTutorials = async () => {
    const base_url = "https://tutorial-api.fullstack.clarusway.com/tutorials/"
    try {
      const {data} = await axios.get(base_url)
      setTutorials(data)
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    getTutorials()

  }, [])


  return (
    <>
      <AddTutorial getTutorials={getTutorials} />
      <TutorialList tutorials={tutorials} getTutorials={getTutorials} />
    </>
  );
};

export default Home;
