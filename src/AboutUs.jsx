import React from 'react';
// import React, { useContext } from 'react';
// import { AppContext } from './context/ProductContext'
import HeroSection from './components/HeroSection';



const AboutUs = () => {

  // const {myName} = useContext(AppContext)



  const data2 = {
    name : 'Alisha Products'
  }
  
  

  return (
    <>
    <HeroSection myData={data2}/>
    </>
  )
}

export default AboutUs
