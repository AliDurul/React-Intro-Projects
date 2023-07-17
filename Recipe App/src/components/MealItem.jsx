import React from 'react'

const MealItem = ({ data }) => {

    return (
        <>
           {
                (!data) ?"Not Found": data.map(item=>{
                    return(
                    <div className="card" key={item.idMeal}>
                        <img src={item.strMealThumb} alt="" />
                        <h3>{item.strMeal}</h3>
                    </div>
                    )
                })
            }


        </>
    )
}

export default MealItem