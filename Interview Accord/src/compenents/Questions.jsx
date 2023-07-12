import { useState } from 'react'

import { arrowdown, arrowup } from "../helpers/icons"

const Questions = ({ item }) => {
  const { id, question, answer } = item

  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(!isClicked)
  }
  return (
    <div className='question_card rounded-4 text-white border border-danger bg-primary mt-3 p-2 '>
      <div className='card_content d-flex container  align-item-center  justify-content-between p-2'>
        <div className=' '><h4>{id}. {question}</h4></div>
        <div className='card_icon ' onClick={handleClick}>
          {isClicked ?  arrowup:arrowdown }
        </div>
      </div>
      {isClicked && <div className='d-block'>
        <p>{answer}</p>
      </div>}
    </div>
  )
}

export default Questions

