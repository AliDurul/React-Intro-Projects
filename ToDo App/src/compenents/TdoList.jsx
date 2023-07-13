import React from 'react'

const TdoList = ({ item }) => {
    console.log();
    return (
        <div className="d-flex justify-content-between w-50">
            <p>{item.text}</p>
            <p>🍗</p>
        </div>


    )
}

export default TdoList