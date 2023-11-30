import React from 'react'
import { NavLink } from 'react-router-dom';
import FormatPrice from '../helper/FormatPrice'

const Product = (currEle) => {
    const {id,category,name,image,price} = currEle; 
  return (
    <>
    {/* <NavLink to={{pathname: `/singleproduct/${id}`,state:{id: 1, name: 'sabaoon', shirt: 'green'}}}> */}
    <NavLink to={`/singleproduct/${id}`}>
      <div className="featureProducts__row">
        <div className="featureProducts__Card">
            <div className="imageWrapper">
                <img src={image} alt="card_image" />
                <h3>{category}</h3>
            </div>
            <div className="name_price">
                <p>{name}</p>
                <span><FormatPrice price={price}/></span>
            </div>
        </div>
      </div>
      </NavLink>
    </>
  )
}

export default Product
