import React from 'react'

const MealItem = ({ meals }) => {

    return (
        <>
           {
                (!meals) ?"Not Found": meals.map(item=>{
                    return(
                    <div  className="card" key={item.idMeal}>
                        <img src={item.strMealThumb} alt={item.strMeal} />
                        <h3>{item.strMeal}</h3>
                    </div>
                    )
                })
            }


        </>
    )
}

export default MealItem