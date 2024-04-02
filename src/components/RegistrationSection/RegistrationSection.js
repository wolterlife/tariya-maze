import React from 'react';
import './RegistrationSection.scss'
import FormRegistration from '../FormRegistration/FormRegistration';

const RegistrationSection = () => {
  return (
    <div className='registration'>
      <FormRegistration/>
      <div>
        <div className="containerText">
          <p className='textTop'>Добро</p>
          <p className='textBot'>пожаловать!!!</p>
        </div>
        <img className='image' src="/img/reg-img.svg" alt="image"/>
      </div>
    </div>
  );
};

export default RegistrationSection;
