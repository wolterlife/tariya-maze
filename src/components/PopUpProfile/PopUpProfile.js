import React from 'react';
import './PopUpProfile.scss'
import {useDispatch} from "react-redux";
import {setPopUpProfileVisible} from "../../redux/commonSlice";
const PopUpProfile = () => {
  const dispatch = useDispatch();
  return (
    <div className='popUpProfile'>
      <div className="content">
          <p>Войдите в ваш аккаунт</p>
          <input onClick={() => dispatch(setPopUpProfileVisible(false))} className='buttonClose' type='image' src="/img/sn-tg.svg" alt="X"/>
        <div className="line">
          <p className='text'>Email / № телефона</p>
          <input className='input' type="text"/>
        </div>
        <div className="line">
          <p className='text'>Пароль:</p>
          <input className='input' type="password"/>
        </div>
        <button className="buttonLogin">Войти</button>
      </div>
    </div>
  );
};

export default PopUpProfile;