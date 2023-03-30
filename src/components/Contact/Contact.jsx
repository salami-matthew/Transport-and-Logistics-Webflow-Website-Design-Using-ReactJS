import React from 'react'
import "./Contact.css"
import Highlight from "../Highlight/Highlight";
import AddressItem from '../AddressItem/AddressItem';

const Contact = () => {
  return (
    <div id='contact' className='contact-container'>
      <div className='contact-section'>
        <div className='upper-section'>
          <div className='left-section'>
            <Highlight info="Contact" type="dark" />
            <h1 className='display-text'>Get in touch with us</h1>
            <p>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value.</p>
            <div className="contact-bar">
              <AddressItem
                img="clock-icon.png"
                heading="Mon - Sat 9.00 - 18.00"
                subheading="Sunday Closed"
              />
              <AddressItem
                img="email-icon.png"
                heading="Email"
                subheading="contact@logistics.com"
              />
              <AddressItem
                img="call-icon.png"
                heading="Call Us"
                subheading="(00) 112 365 489"
              />
            </div>
          </div>
          <div className='right-section'>
            <form>
              <span>
                <input type="text" placeholder="Your Name*" required />
                <input type="email" placeholder="Email*" required />
              </span>
              <span>
                <input type="text" placeholder="Phone Number*" required />
                <input type="text" placeholder="City*" required />
              </span>
              <textarea id="message" name="message" placeholder='Your Message'
                rows="5" cols="33" />
              <button type='button' className='submit-btn'>
                Submit Message
              </button></form>
          </div>
        </div>


      </div>
      <div className='lower-section'>
        <img src='./client-logo.png' />
      </div>
    </div>
  )
}

export default Contact