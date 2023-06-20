import React from "react";

import '../Styles/Contact.css'

import { useRef } from 'react';
import emailjs from '@emailjs/browser';



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_w9u5xqb', 'template_fw77ywd', form.current, '-1r-GRsjM3zMhNy7m')

    e.target.reset()
  }
  return (
    <section id='contact'>
     
      <h2>Drop A Message Here</h2>

      <div className="container contact__container">
        <div className="contact__options">
          
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='user_name' placeholder='Your Full Name' required />
          <input type="email" name='user_email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary' justify-content="center">Send Message</button>
        </form>
      </div>
    </section>
    
    
  );
}

export default Contact;
