import React from 'react';
import './Footer1.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='main-footer'>
        <a href="/about" className='footer-link'>About Us</a>
        <a href="/privacy" className='footer-link'>Privacy Policy</a>
        <a href="/terms" className='footer-link'>Terms of Use</a>
        {/* <a href="/subscription-policy" className='footer-link'>Subscription Policy</a> */}
        <a href="/contact" className='footer-link'>Contact Us</a>
      </div>
      <div>
        <p className='para'>Copyright © 2023 USA PRINT CARE. All Rights Reserved</p>
        <h2 className='name'>USA PRINT CARE</h2>
      </div>
    </div>
  );
};

export default Footer;
