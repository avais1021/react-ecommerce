import React from 'react'
import { Container } from '../App';
import { NavLink } from 'react-router-dom';


const HeroSection = ({ myData }) => {

    // console.log(myData , 'myData')
    const { name } = myData;

    return (
        <>
            <section className="section">
                <Container>
                    <div className="hero">
                        <div className="hero__left">
                            <h3>WELCOME TO</h3>
                            <h1>{name}</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore odio amet sint minus consectetur
                                ipsum porro ratione hic, illum deserunt? Ab quaerat voluptatum deserunt eos placeat facilis
                                praesentium vero pariatur.</p>
                            <NavLink to="/product"><button>SHOW NOW</button></NavLink>
                        </div>
                        <div className="hero__right">
                            <img src="shoppingjpg.jpg" alt="shopping_image" />
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default HeroSection;


