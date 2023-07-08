import { useState } from "react";

const Card = () => {

    const [active, setActive] = useState(false)


const handleFlip = () => {
  setActive(!active)

}

  return (
    <div className="d-flex justify-content-center mt-5 card__compenent">
        <div className="card__container">
            <div onClick={handleFlip} className={`card__content ${active ? 'flipCard' : ''}`}>
                <div className="card__front">
                    <h1 className="front_h1" >The Fair</h1>
                    <p >The Fair is a platform for the people to connect with each other and the world.</p>
                </div>
                <div className="card__back">
                    <p>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card