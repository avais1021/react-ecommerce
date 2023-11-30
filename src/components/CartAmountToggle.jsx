import React from 'react'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";


const CartAmountToggle = ({ amount, increament, decreament , props }) => {
    return (
        // <div className={props === "cartToggle" ? 'forCart' : ''}>
        <div className={props}>
            <div className="addProduct">
                <button onClick={decreament}><AiOutlineMinus /></button>
                <p>{amount}</p>
                <button onClick={increament}><AiOutlinePlus /></button>
            </div>

        </div>
    )
}

export default CartAmountToggle
