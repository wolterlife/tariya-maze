import React from 'react';
import './RegistrationSection.scss'
import FormRegistration from '../FormRegistration/FormRegistration';

const RegistrationSection = () => {
  return (
    <div className='registration'>
      <FormRegistration />
        <div>
        <p className='textTop'>Добро</p>
        <p className='textBot'>пожаловать!!!</p>
      </div>
    </div>
  );
};

export default RegistrationSection;
