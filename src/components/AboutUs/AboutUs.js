import React from 'react';
import './AboutUs.scss'

const AboutUs = () => {
  return (
    <div className='aboutContainer'>
      <p className='textLarge'>О нас</p>
      <p className='textSmall'> Здесь желания становятся реальностью <br/>
        Мы гарантируем: Уютную атмосферу, которая воплощает идеальное сочетание комфорта и стиля. <br/>
        Широкий выбор изысканных блюд, приготовленных с любовью из натуральных продуктов. <br/>
        Мастерски сваренный кофе, который подарит вам непревзойденный аромат и настроение на весь день. <br/>
        Превосходное обслуживание, ведь для нас вы - самое важное.</p>
      <hr className='line'/>
    </div>

  );
};

export default AboutUs;