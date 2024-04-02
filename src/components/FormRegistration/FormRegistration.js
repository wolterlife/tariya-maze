import React from 'react';
import './FormRegistration.scss'

const FormRegistration = () => {
  return (
    <div className='formRegistration'>
      <img className='backgroundTop' src="/img/reg-top.svg" alt="background-img"/>
      <img className='backgroundBot' src="/img/reg-bot.svg" alt="background-img"/>

      <div className="line">
      <p className='text'>Фамилия:</p>
      <input className='input' type='text' />
      </div>
    </div>
  );
};

export default FormRegistration;
