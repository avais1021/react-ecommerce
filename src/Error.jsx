import React from 'react'
import { Container } from './App'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <>
    <div className="section errorPage">
      <Container>
        <h2>404</h2>
        <h3>OH! Yore' lost</h3>
        <p>The page you are looking for does not exist . How you got here is a mystery. But you can click the button below to go back to the homepage. </p>
        <NavLink to="/"><button className='button__1'>GO BACK TO HOME</button></NavLink>
      </Container>
    </div>

    </>
  )
}

export default Error
