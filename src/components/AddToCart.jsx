import React, { useState } from 'react'
import { AiOutlineCheck } from "react-icons/ai";
import CartAmountToggle from './CartAmountToggle';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../context/Cart_Context';


const AddToCart = ({ product }) => {

    const {addToCart} = useCartContext()

    const { id, colors = [''], stock } = product;
    console.log(colors, 'color');

    const [checkColor, setCheckColor] = useState(colors[0])
    const [amount , setAmount] = useState(1)

    const increament = () => {
        amount < stock ? setAmount(amount+1) : setAmount(amount) 
    }

    const decreament = () => {
        amount > 1 ? setAmount(amount-1) : setAmount(1);
    }

    return (
        <>
            <div className="colors">
                <p>Colorss:</p>
                <div className="wrapperBtn">
                    {colors.map((item, idx) => {
                        return <button className={checkColor === item ? 'active' : ''}
                            style={{ background: item }} key={idx} onClick={() => setCheckColor(item)}>
                            {checkColor === item ? <AiOutlineCheck /> : ''}
                        </button>
                    })}
                </div>
            </div>
            <CartAmountToggle amount={amount} increament={increament} decreament={decreament}  />

            <NavLink to="/cart" onClick={()=>addToCart(id,checkColor,amount,product)}>
                <button className='footer__button'>ADD TO CART</button>
            </NavLink>

           
        </>

    )
}

export default AddToCart
