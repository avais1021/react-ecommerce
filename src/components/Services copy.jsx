import React from 'react';
import { FaTruckFast } from "react-icons/fa6";
import { Container } from '../App';

const Services = () => {
    return (
        <>
            <section className="section">
                <Container>
                    <div className="service">
                        <ServiceCard />
                        <CenterServiceCard />
                        <ServiceCard />
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Services

const ServiceCard = () => {
    return (
        <>
            <div className="service__Cards">
                <div className="service__icons">
                    <FaTruckFast />
                </div>
                <p>Super Fast And Free Delivery</p>
            </div>
        </>
    )
}

const CenterServiceCard = () => {
    return (
        <>
            <div className="service__centerCard">
                <CenterCardChild />
                <CenterCardChild />
            </div>
        </>
    )
}

const CenterCardChild = () => {
    return (
        <>
            <div className="service__centerCard__child">
                <div className="service__icons">
                    <FaTruckFast />
                </div>
                <p>Non-Contact Shipping</p>
            </div>
        </>
    )
}