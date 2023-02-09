import React from 'react';
import { FaFreebsd } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer-wrap'>
      <div className='footer'>
        <span>Suming App</span>
        <FaFreebsd className='footer-logo' />
      </div>
    </div>
  );
};

export default Footer;
