import React from 'react'

const ProductCard = ({ data }) => {
  return (
    <div className='d-flex flex-wrap gap-3 mt-5 justify-content-center'>

      {
        data?.map((item) => {
          const { id, image, price, title } = item
          return (
            <div key={id} className="card" style={{ width: '18rem' }}>
              <div className='img-card'>
                <img src={image} className="card-img-top" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{price}</p>
              </div>
            </div>
          )
        })
      }





    </div>
  )
}

export default ProductCard