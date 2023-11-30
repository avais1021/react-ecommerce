import React from 'react'
import { Container } from './App'
import { useAuth0 } from "@auth0/auth0-react";

const Contact = () => {

  const { user, isAuthenticated } = useAuth0();

  return (
    <>
      <section className='section'>
        
          <div className="contact">
            <h2>Feel Free To Contact Us</h2>

            <iframe title="myFrame"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.691800046278!2d72.9667904780761!3d19.208659101466544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b97304d636f1%3A0xd7d62dc2bdd3f9cc!2sViviana%20Mall!5e0!3m2!1sen!2sin!4v1694691649063!5m2!1sen!2sin"
              width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>

      <Container>
         <div className="contact__form">
          <form action="https://formspree.io/f/mjvqoypv" method='POST'>
          <input type="text" placeholder='Username' name='Username' required autoComplete='off' value={isAuthenticated ? user.name : ''} />
            <input type="email" placeholder='Email' name='Email' required autoComplete='off' value={isAuthenticated ? user.email : ''} />
            <textarea placeholder='Enter your message' name="Message"  cols="30" rows="10" required autoComplete='off'></textarea>
            <input type="submit" value='Send' className='contact__form__send' />
            </form>
         </div>
      </Container>

      </section>
    </>
  )
}

export default Contact
