import React from 'react'
import { Container } from '../App'
import { AiFillYoutube, AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <section className='section footer'>


                {/* --get started */}
                <div className="getStarted">
                    <Container>
                        <div className="getStarted__wrapper">
                            <p>Ready to get started? <br /> Talk to us today</p>
                            <button className='footer__button'><NavLink to="/contact">
                                GET STARTED
                            </NavLink></button>
                        </div>
                    </Container>
                </div>


                <Container>

                    <div className="footerCardParent">
                        <div className="footerCard">
                            <p>Owes Ansari</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, error.</p>
                        </div>

                        <div className="footerCard">
                            <p>Subscribe to get important updates</p>
                            <input type="text" placeholder='Your E-mail' />
                            <button className='footer__button'>SUBSCRIBE</button>
                        </div>

                        <div className="footerCard">
                            <p>Follow Us</p>
                            <div className="footer__icons">
                               
                                <a target='_blank' href="https://www.youtube.com/results?search_query=beautiful+nature+">
                                <AiFillYoutube />
                                </a>
                                <a target='_blank' href="https://www.instagram.com/accounts/login/">
                                <AiFillInstagram />
                                </a>
                                <a target='_blank' href="https://communitynotes.twitter.com/guide/en/contributing/signing-up">
                                <AiOutlineTwitter />
                                </a>
                                

                            </div>
                        </div>
                        <div className="footerCard">
                            <p>Call Us</p>
                            <p className='callUs'><a href="tel:8655102214">+91 8655102214</a></p>
                        </div>

                    </div>

                </Container>

                <hr />

                <Container>
                    <div className="footer__policy">
                        <div className="footer__policy__left">
                            <p>@ {new Date().getFullYear()} Owes Ansari. All Right Reserved </p>
                        </div>
                        <div className="footer__policy__right">
                            <p>PRIVACY POLICY</p>
                            <p>TERMS & CONDITIONS</p>
                        </div>

                    </div>
                </Container>



            </section>


        </>
    )
}

export default Footer
