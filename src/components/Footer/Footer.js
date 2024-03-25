import React from 'react';
import './Footer.scss'

const Footer = () => {
  return (
    <div className='containerFooter'>
      <div className="linkSection">
        <img className='logoLarge' src="/img/logoLarge.svg" alt="logoLarge"/>
        <div className="line">
          <div className="left-part">
            <img className='iconSocial' src="/img/sn-vk.svg" alt="vk"/>
          </div>
          <a className='linkSocial' href='https://vk.com/tariyamaze'>vk.com/tariyamaze</a>
        </div>
        <div className="line">
          <div className="left-part">
            <img className='iconSocial' src="/img/sn-tg.svg" alt="tg"/>
          </div>
          <a className='linkSocial' href='https://t.me/tariyamaze'>t.me/tariyamaze</a>
        </div>
        <div className="line">
          <div className="left-part">
            <img className='iconSocial' src="/img/sn-inst.svg" alt="inst"/>
          </div>
          <a className='linkSocial' href='https://instagram.com/tariyamaze/'>@tariyamaze</a>
        </div>
        <div className="line">
          <div className="left-part">
            <img className='iconSocial' src="/img/sn-pm.svg" alt="pm"/>
          </div>
          <a className='linkSocial' href='https://play.google.com/store/apps?hl=ru&gl=US&pli=1'>tariyamaze</a>
        </div>
      </div>
      <div className="timePartSection">
        <p className='textWorkTime'>Время работы:</p>
        <div className='schedule'>
          <div className="schedulePart">
            <p className='textWorkValue'>Пн-Пт:</p>
            <p className='textWorkValue'>Сб:</p>
            <p className='textWorkValue'>Вс:</p>
          </div>
          <div className="schedulePart">
            <p className='textWorkValue'>10:00 - 23:00</p>
            <p className='textWorkValue'>10:00 - 24:00</p>
            <p className='textWorkValue'>Выходной</p>
          </div>
        </div>
      </div>
      <img className='imgLines' src="/img/footer-line.svg" alt="footerLine"/>
      <div className='placeContainer'>
        <img className='icon' src="/img/footer-location.svg" alt="locationIcon"/>
        <p className='text'>г. Гродно ул. Рафиева д.54</p>
      </div>
      <div className="info">
        <p className='text'>По всем <br /> вопросам:</p>
        <div className="numbers">
          <p className='num'>+375(26)487 16 03</p>
          <p className='num'>+375(26)566 41 12</p>
        </div>
      </div>
      <p className='policy'>© 2023 ALL TARIYA MAZE</p>
    </div>
  );
};

export default Footer;