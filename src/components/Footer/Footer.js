import React from 'react';
import './Footer.scss'

const Footer = () => {
  return (
    <div className='containerFooter'>
      <img src="/img/logoLarge.png" alt="logoLarge"/>
      <div className="line">
        <img src="/img/sn-vk.png" alt="vk"/>
        <a href='vk.com/tariyamaze'>vk.com/tariyamaze</a>
      </div>
    </div>
  );
};

export default Footer;