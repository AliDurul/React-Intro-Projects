import React, { useEffect, useState } from "react";
import MealItem from "./MealItem";
import ReacipeIndex from "./ReacipeIndex";

import axios from "axios"

const Meal = () => {

    const [url, setUrl] = useState("https://www.themealdb.com/api/json/v1/1/search.php?f=a");


    const [meals, setMeals] = useState()


    const fetcData = async () => {
        const request = await axios.get(url)
        setMeals(request.data.meals)
    }

    useEffect(() => {
        fetcData()

    }, [url])


    const handleSearch = (e) => {
        setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${e.target.value}`)
      
    }
    console.log(meals);

    return (
        <>
            <div className="main">
                <div className="heading">
                    <h1>Search Your Food Recipe</h1>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque tempore unde sed ducimus voluptates illum!</h4>
                </div>
                <div className="searchBox">
                    <form action="" >
                        <input type="search" className="search-bar" onChange={ handleSearch } />
                    </form>
                </div>
                <div className="container">

                    {
                        meals && <MealItem meals = {meals} /> 
                    }

                </div>
                <div className="indexContainer">
                    <ReacipeIndex />
                </div>

            </div>
        </>
    )
}
export default Meal;