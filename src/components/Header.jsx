import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import Nav from './Nav';
import { Container } from '../App';

const Header = () => {
    const [iconClick, setIconClick] = useState(false)

    return (


        <header style={{ color: 'red', overflow: iconClick ? 'unset' : 'hidden' }}>
            <Container>
                <HeaderRow className="header_row">
                    <NavLink to='/'>
                        <div className="image">
                            <img src="shopping_logo.png" alt="" />
                        </div>

                    </NavLink>
                    <Nav iconClicked={iconClick} headerClick={() => setIconClick(!iconClick)} />
                </HeaderRow>
            </Container>
        </header>
    )
}

const HeaderRow = styled.div`
display:flex;
justify-content: space-between;
/* align-items : center; */
/* min-height: 88px; */
width : 100% ;
/* min-height : 100vh; */
padding-top : 28px;
overflow : hidden;

.image {
    width: 100px;
    height: 60px;
}
.image img {
    width : 100%;
    height : 100%;
}

@media screen and (min-width : ${({ theme }) => theme.media.desktop}){
}
/* @media screen and (max-width : ${({ theme }) => theme.media.mobile}){
    position : relative;
} */
`

export default Header
