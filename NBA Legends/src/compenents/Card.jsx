import { useState } from "react"

const Card = ({ data }) => {
    const { name, img, statistics } = data
    const [isclicked, setIsclicked] = useState(false)

const handleClick = (e) => {
  console.log(e.target.alt);
  setIsclicked(!isclicked)
} 


    return (
        <div
        onClick={handleClick}
            className="card card_container"
            style={{ width: '200px' }}
        >
            <div className="card-header border-top">
                <p className="card-text">{name}</p>
            </div>
            <div
           
                className={`card_content ${isclicked ? "flipCard" : null}`} name={name}>
                <div className="front_card">
                    <div className="img_div">
                        <img src={img}  className="card-img-top" alt={name} />
                    </div>
                </div>
                <div className="back_card text-center">
                    <ul className="text-start">
                        <li>🏀 {statistics[0]}</li>
                        <li>🏀 {statistics[1]}</li>
                        <li>🏀 {statistics[2]}</li>
                        <li>🏀 {statistics[3]}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card