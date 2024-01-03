import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu } from 'react-icons/cg';
import { CgClose } from 'react-icons/cg';
import { useCartContext } from '../context/Cart_Context';
import { useAuth0 } from "@auth0/auth0-react";

const Nav = ({ headerClick, iconClicked }) => {

  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  const { total_cartIconItem } = useCartContext();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // const ulCsstrue = { left: '0', height: '100vh' }
  // const ulCssfalse = { left: '100%', height: 'auto' }
  const ulCsstrue = { height: '100vh', display: 'flex', zIndex: '1' }
  const ulCssfalse = { height: 'auto' }
  // {iconClicked ? document.body.classList.add('stop_scrolling') : document.body.classList.remove('stop_scrolling')}
  iconClicked && windowWidth < 768.9 ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset';

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // Add a resize event listener to the window
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);




  //  const [iconClick, setIconClick] = useState(false)

  return (
    <NavBar >
      <div className="hamberger">
        {/* {iconClick ? <CgClose className='close' onClick={() => setIconClick(false)} /> :
          <CgMenu className='cgmenue' onClick={() => setIconClick(true)} />
        } */}

        {iconClicked ? <CgClose className='close' onClick={headerClick} /> :
          <CgMenu className='cgmenue' onClick={headerClick} />
        }


      </div>
      <ul className='navBar' style={iconClicked && windowWidth < 768.9 ? ulCsstrue : ulCssfalse}>
        <li><NavLink to="/" className="navbar_link" onClick={headerClick}>Home</NavLink></li>
        <li><NavLink to="/about" className="navbar_link" onClick={headerClick}>About</NavLink></li>
        <li><NavLink to="/product" className="navbar_link" onClick={headerClick}>Product</NavLink></li>
        <li><NavLink to="/contact" className="navbar_link" onClick={headerClick}>Contact</NavLink></li>
        {isAuthenticated ? <li className='userName'>{user.name}</li> : ""}
        {isAuthenticated ?
          <li><button className='loginBtn' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} >Logout</button></li>
          :
          <li><button className='loginBtn' onClick={() => loginWithRedirect()}>Login</button></li>
        }
        <li><NavLink to="/cart" className="navbar_link cart_trolley" onClick={headerClick}>
          <FiShoppingCart className='cart_trolley_icon' /> <span className='cart_total_item'>{total_cartIconItem}</span>
        </NavLink></li>
      </ul>

    </NavBar>
  )
}

export default Nav


const NavBar = styled.div`
    .navBar{
      display: flex;
      gap: 15px;
      /* align-items : center; */
      list-style : none;
    padding-right: 22px;
    } 
    .navBar a{
      color : black;
      text-decoration: none;
      position: relative;
    }
    .cart_total_item{
      position: absolute;
    top: -8px;
    left: 12px;
    background: #b3b3ff;
    font-size: 13px;
    border-radius: 17px;
    width: 21.96px;
    height: 21.6px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: bold;
    }
    .cart_trolley_icon{
      font-size : 18px;
    }
    .hamberger{
      display :none ;
    }
    .loginBtn{
    padding: 3px 10px;
    font-size: 16px;
    border: none;
    background: #5973f4;
    color: white;
    cursor: pointer;

    }
    .userName{
      font-weight: 700;
    color: black;
    }
   
    @media screen and (max-width :${({ theme }) => theme.media.mobile}){
      .navBar{
        position: absolute;
        width: 100%;
        height: 100%;
        /* top: 165px; */
        top : 0;
        left : 0;
        /* z-index : -1; */
        /* left: 100%; */
        flex-direction: column;
        align-items: center;
       justify-content: center;
       background : white;
       padding-right: unset;
       display : none;
      }

      .hamberger{
      display :block ;
    }
    .hamberger{
      font-size : 35px;
      position: absolute;
      right: 15px;
      top: 37px;
      z-index: 10;
    }

    }
   
  
    `

