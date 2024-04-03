import React from 'react';
import './PopUpProfile.scss'
import {useDispatch} from "react-redux";
import {setPopUpProfileVisible} from "../../redux/commonSlice";
import {useNavigate} from 'react-router-dom';
const PopUpProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className='popUpProfile'>
      <div className="content">
          <p className='textEntry'>Войдите в ваш аккаунт</p>
          <input onClick={() => dispatch(setPopUpProfileVisible(false))} className='buttonClose' type='image' src="/img/x-mark.svg" alt="X"/>
        <div className="line">
          <p className='text'>Email / № телефона</p>
          <input className='input' type="text"/>
        </div>
        <div className="line">
          <p className='text'>Пароль:</p>
          <input className='input' type="password"/>
        </div>
        <button className="buttonLogin">Войти</button>
        <p className='textInfo'>Если нет аккаунта необходимо пройти регистрацию</p>
        <input onClick={() => navigate('/registration')} className='buttonRegister' type='button' value='Зарегистрироваться' />
        <img className='backgroundTop' src="/img/reg-top.svg" alt="background-img"/>
        <img className='backgroundBot' src="/img/reg-bot.svg" alt="background-img"/>
      </div>
    </div>
  );
};

export default PopUpProfile;
