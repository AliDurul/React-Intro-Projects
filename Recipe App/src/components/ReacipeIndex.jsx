import React from "react";

const ReacipeIndex = () => {
   const alpha = ['A', "B", "C", "D", "E", "F", "J", "I", "J", "k", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
   let num=0;
   return (
        <>
            {   
                alpha.map(item => {
                    return(
                    <div className="numBox" key={num++} >
                        <h3>{item}</h3>
                    </div>)
                })
            }
        </>
    )
}
export default ReacipeIndex;