import React , { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/CartReducer';

const CartContext = createContext();

const initialState = {
    cart: JSON.parse(localStorage.getItem('cartItem')) || [],
    total_time: "",
    total_cartIconItem: "",
    All_product_subTotal : "",
    shippingFee: 5000,
}
const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const addToCart = (id, checkColor, amount, product) => {
        dispatch({ type: "ADD_TO_CART", payload: { id, checkColor, amount, product } })
    }
    const removeCartItem = (cartItemId) =>{
        console.log(cartItemId,'cartItemId........................');
        dispatch({type : 'REMOVE_CART_ITEM' , payload : {cartItemId}})
    }

    const clearAllCart = () => {
        dispatch({type : "CLEAR_ALL_CART"})
    }

    const cartIncreament = (cartItemId) => {
        dispatch({type:"CART_ITEM_INCREAMENT" , payload : cartItemId})
    }
    const cartDecreament = (cartItemId) => {
        dispatch({type:"CART_ITEM_DECREAMENT" , payload : cartItemId})
    }

    useEffect(() => {
         localStorage.setItem('cartItem' , JSON.stringify(state.cart));
         dispatch({type : "ICON_CART_ITEM"});
         dispatch({type : "ALL_PRODUCT_SUBTOTAL" });
        //  dispatch({type: "ICON_CART_ITEM_AND_ALL_PRODUCT_SUBTOTAL"})
    } , [state.cart])

   return(
       <CartContext.Provider value={{...state , addToCart , removeCartItem , clearAllCart , cartIncreament , cartDecreament}}>
       {children}
       </CartContext.Provider>
   )
}

const useCartContext = () => {
    return useContext(CartContext);
}

export { CartProvider, useCartContext };