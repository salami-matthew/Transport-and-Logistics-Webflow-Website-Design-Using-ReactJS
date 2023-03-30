import React from 'react'
import "./Footer.css"
import AddressItem from "../AddressItem/AddressItem";

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-section'>
        <div className='footer-nav'>
          <div className='logo-background'>
            <img src='./Logo.png' />
          </div>
          <div className='nav-links'>
            <h3>Pages</h3>
            <h3>Utility</h3>
            <h3>Subscribe</h3>
          </div>

        </div>
        <div className='footer-content'>
          <div className='left-footer-content'>
            <p className='content-info'>Leverage agile frameworks to provide a robust synopsis for strategy  collaborative thinking to further the overall value proposition.</p>
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
          <div className='right-footer-content'>
            <div className='footer-content-links'>
              <p>About Us</p>
              <p>Our Team</p>
              <p>Our Project</p>
              <p>Pricing</p>
              <p>Contact</p>
            </div>
            <div className='footer-content-links'>
              <p>Style Guide</p>
              <p>Changelog</p>
              <p>Licenses</p>
              <p>Protected</p>
              <p>Not Found</p>
            </div>

            <div className='footer-form-container'>
              <form className='footer-form'>
                <input className='footer-input' type="email" placeholder="Email here*" required />
                <div className='button-icons'>
                  <button type='button' className='submit-btn footer-btn'>
                    Send Now
                  </button>
                  <div className='footer-icons'>
                    <img src='./footer-icon1.png' />
                    <img src='./footer-icon2.png' />
                    <img src='./footer-icon3.png' />
                  </div>
                </div>
              </form>

            </div>
          </div>
        </div>
        <div className='footer-copyright'>
          <div className='copyright-text'>
            <p>Copyright © TransitFlow | Designed by VictorFlow - Powered by Webflow.</p>
          </div>
          <div className='copyright-links'>
            <p>Style Guide</p>
            <p>Licenses</p>
            <p>Changelog</p>
            <p>Password</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer