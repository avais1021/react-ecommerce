import React from 'react';
import { FaTruckFast } from "react-icons/fa6";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentFill } from "react-icons/ri";
import { Container } from '../App';

const Services = () => {
    return (
        <>
            <section className="section">
                <Container>
                    <div className="service">
                        <ServiceCard width={'25%'} height={260} title={'Super Fast And Free Delivery'} image={'truck'} flex_direction={'column'} />

                        <div className="service__centerCard">
                            <ServiceCard width={'100%'} height={100} title={'Non-contact Shipping'} image={'mdsecurity'} flex_direction={'unset'} />
                            <ServiceCard width={'100%'} height={100} title={'Money-back Guaranteed'} image={'GiReceiveMoney'} flex_direction={'unset'} />
                        </div>

                        <ServiceCard width={'25%'} height={260} title={'Super Secure payment System'} image={'RiSecurePaymentFill'} flex_direction={'column'} />

                    </div>
                </Container>
            </section>
        </>
    )
}

export default Services

const ServiceCard = ({ image, width, height, title, flex_direction }) => {
    return (
        <>
            <div className="service__Cards" style={{ height: height, width: width, flexDirection: flex_direction }}>
                <div className="service__icons">
                    {
                        image === 'truck' && <FaTruckFast />
                    }
                    {
                        image === 'mdsecurity' && <MdSecurity />
                    }
                    {
                        image === 'GiReceiveMoney' && <GiReceiveMoney />
                    }
                    {
                        image === 'RiSecurePaymentFill' && <RiSecurePaymentFill />
                    }
                </div>
                <p>{title}</p>
            </div>
        </>
    )
}



// const CenterServiceCard = () => {
//     return (
//         <>
//             <div className="service__centerCard">
//                 <CenterCardChild />
//                 <CenterCardChild />
//             </div>
//         </>
//     )
// }

// const CenterCardChild = () => {
//     return (
//         <>
//             <div className="service__centerCard__child">
//                 <div className="service__icons">
//                     <FaTruckFast />
//                 </div>
//                 <p>Non-Contact Shipping</p>
//             </div>
//         </>
//     )
// }