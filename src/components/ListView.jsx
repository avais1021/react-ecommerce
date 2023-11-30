import React from 'react'
import { NavLink } from 'react-router-dom';
import FormatPrice from '../helper/FormatPrice';

const ListView = ({ products }) => {

    return (
        <div className='list_product'>

            {products.map((ele) => {
                const { id, name, image, price, description } = ele;
                return (

                    <div key={id} className="featureProducts__row">
                        <div className="featureProducts__Card">
                            <div className="imageWrapper">
                                <img src={image} alt="card_image" />
                                {/* <h3>{category}</h3> */}
                            </div>
                            <div className="name_price">
                                <p>{name}</p>
                                <span><FormatPrice price={price} /></span>
                                <p>{description.slice(0, 90)}...</p>
                                <NavLink to={`/singleproduct/${id}`}>
                                    <button className='read_more'>READ MORE</button>
                                </NavLink>
                            </div>
                        </div>

                    </div>

                )
            })}
        </div>
    )
}

export default ListView
