import React from 'react'
import Product from './Product'


const GridView = ({ products }) => {
    return (
        <div className='CardList_parent'>

            {products.map((ele, idx) => {
                return(
                <Product key={idx} {...ele} />
                )
            })}

        </div>
    )
}

export default GridView
