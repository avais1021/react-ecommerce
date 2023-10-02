import React from 'react'
import HeroSection from './components/HeroSection'
import Services from './components/Services'
import Companies from './components/Companies'
import FeatureProducts from './components/FeatureProducts'





const Home = () => {

  const data = {
    name: 'Alisha Store',
  }

  return (
    <>
      <HeroSection myData={data} />
      <Services />
      <FeatureProducts/>
      <Companies/>
 
    </>
  )
}

export default Home


