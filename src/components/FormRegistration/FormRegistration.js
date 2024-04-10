import React, {useState} from 'react';
import './FormRegistration.scss'

const FormRegistration = () => {
  const [checkBoxStatus, setCheckBox] = useState(false);

  return (
    <div className='formRegistration'>
      <img className='backgroundTop' src="/img/reg-top.svg" alt="background-img"/>
      <img className='backgroundBot' src="/img/reg-bot.svg" alt="background-img"/>
      <div className="line">
        <p className='text'>Фамилия:</p>
        <input className='input' type='text'/>
      </div>
      <div className="line">
        <p className='text'>Имя:</p>
        <input className='input' type='text'/>
      </div>
      <div className="line">
        <p className='text'>Отчество:</p>
        <input className='input' type='text'/>
      </div>
      <div className="line">
        <p className='text'>№ телефона:</p>
        <input className='input' type='tel'/>
      </div>
      <div className="line">
        <p className='text'>Email:</p>
        <input className='input' type='email'/>
      </div>
      <div className="line">
        <p className='text'>Дата рождения:</p>
        <input className='input' type='date'/>
      </div>
      <div className="line">
        <p className='text'>Адрес:</p>
        <input className='input' type='text'/>
      </div>
      <div className="line">
        <p className='text'>Пароль:</p>
        <input className='input' type='password'/>
      </div>
      <div className="line">
        <p className='text'>Повторите пароль:</p>
        <input className='input' type='password'/>
      </div>
      <div>
        <div className="lineConfidental">
          {checkBoxStatus ?
            <input onClick={() => setCheckBox(false)} type='image' src='/img/checkbox-on.svg' alt='checkbox'/>
            :
            <input onClick={() => setCheckBox(true)} type='image' src='/img/checkbox-off.svg' alt='checkbox'/>
          }
          <p className='text'>я согласен с политикой конфиденциальности</p>
        </div>
        <div className="wrapperButton">
          <button className='buttonRegister'>Зарегистрироваться</button>
        </div>
      </div>
    </div>
  );
};

export default FormRegistration;
