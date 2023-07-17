import React, { useState } from "react";
import MealItem from "./MealItem";
import ReacipeIndex from "./ReacipeIndex";

const Meal = () => {

    const [url, setUrl] = useState("https://www.themealdb.com/api/json/v1/1/search.php?f=a");

    return (
        <>
            <div className="main">
                <div className="heading">
                    <h1>Search Your Food Recipe</h1>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque tempore unde sed ducimus voluptates illum!</h4>
                </div>
                <div className="searchBox">
                    <input type="search" className="search-bar" />
                </div>
                <div className="container">

                    <MealItem />


                </div>
                <div className="indexContainer">
                    <ReacipeIndex />
                </div>

            </div>
        </>
    )
}
export default Meal;