import { useEffect, useState } from "react";
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios"
const Home = () => {

  const [tutorials, setTutorials] = useState()

  const base_url = "https://tutorial-api.fullstack.clarusway.com/tutorials/"

  const getTutorials = async () => {
    try {
      const {data} = await axios.get(base_url)
      setTutorials(data)
      console.log(tutorials);
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    getTutorials()

  }, [])


  return (
    <>
      <AddTutorial />
      <TutorialList tutorials={tutorials} />
    </>
  );
};

export default Home;
