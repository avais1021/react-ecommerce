import React from 'react'
import { MdDelete } from "react-icons/md";
import CartAmountToggle from './CartAmountToggle';
import FormatPrice from '../helper/FormatPrice';
import { useCartContext } from '../context/Cart_Context';

const CartItem = ({ id, name, image, checkColor, price, amount , max }) => {

    const {removeCartItem , cartIncreament , cartDecreament } = useCartContext();

   
    return (

        <div className="cartInfoSingle">
            <div className="cartInfoItem">
                <div className="row">
                    <img src={image} alt={image} />
                    <div className="nameColor">
                        <p>{name}</p>
                        <p className='color'>Color <span style={{ background: checkColor }}></span></p>
                    </div>
                </div>
            </div>

            <p><FormatPrice price={price} /></p>

            <CartAmountToggle props="forCart" amount={amount} increament={()=>cartIncreament(id)} decreament={()=>cartDecreament(id)} />

            <p><FormatPrice price={price*amount} /></p>

            <div className="remove">
                <MdDelete onClick={()=>removeCartItem(id)} />
            </div>

        </div>
    )
}

export default CartItem
