import React from 'react'
import { useCartContext } from './context/Cart_Context'
import { Container } from './App';
import CartItem from './components/CartItem';
import { NavLink } from 'react-router-dom';
import FormatPrice from './helper/FormatPrice';
import { useAuth0 } from "@auth0/auth0-react";


const Cart = () => {
  const { user, isAuthenticated} = useAuth0();
  const { cart , clearAllCart ,All_product_subTotal,shippingFee } = useCartContext()

  console.log(cart, 'cart____page');

  if(cart.length === 0){
    return(
      <>
      <div className="section">
      <Container>
        <h1 className='no_cart'>No Cart In Item</h1>
      </Container>
      </div>
      </>
    )
  }

  return (
    <div className='section'>
      <Container>
      {isAuthenticated ?
      <div className="userInfo">
        <img src={user.profile} alt="pic" />
        <h2>{user.name}</h2>
      </div> : ""
      }
        <div className="cartNav">
          <div className="row">
            <h3>ITEM</h3>
            <h3>PRICE</h3>
            <h3>QUANTITY</h3>
            <h3>SUBTOTAL</h3>
            <h3>REMOVE</h3>
          </div>
          <hr />
          <div className="cartInfo">

            {cart.map((ele , idx ) => {
              return (

               <CartItem key={ele.id} {...ele}  />

                

              )
            })}


          </div>
          
          <div className="continueShop">
            <NavLink to="/product">
              <p>CONTINUE SHOPPING</p>
            </NavLink> 

            <button onClick={clearAllCart}>CLEAR CART</button>
          </div>

          <div className="orderTotalPrice">
            <div className="row">
              <div>
                <p>subtotal :</p>
                <h3><FormatPrice price={All_product_subTotal} /></h3>
              </div>
              <div>
                <p>Shipping Fee :</p>
                <h3><FormatPrice price={shippingFee}/></h3>
              </div>
              <div className='orderTotal'>
                <p>Oreder Total :</p>
                <h3><FormatPrice price={All_product_subTotal + shippingFee}/></h3>
              </div>
            </div>
          </div>
            

        </div>
      </Container>
    </div>
  )
}

export default Cart
