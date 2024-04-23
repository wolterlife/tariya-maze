import React from 'react';
import './Settings.scss'
import {useNavigate} from 'react-router-dom';

const Settings = () => {
  const navigate = useNavigate()
  return (
    <div className='settings'>
      <img className='image' src="/img/backgr-user.png" alt="background"/>
      <div className="window">

        <img onClick={()=>navigate('/profile')} className='xmark' src="/img/x-mark.svg" alt="x"/>

        <img className='leftImg' src="/img/lines-sett-left.svg" alt="left"/>
        <img className='rightImg' src="/img/lines-sett-right.svg" alt="right"/>

        <div className="info">
          <div className="brownContainer">
            <p className='text'>Фамилия Имя Отчество:</p>
            <p className='text'>№ телефона:</p>
            <p className='text'>Почта:</p>
            <p className='text'>Дата рождения:</p>
            <p className='text'>Адрес:</p>

          </div>
          <div className="whiteContainer">
            <div className="line">
              <p className="text">Брагимец Арим Константинович</p>
              <img className='editImg' src="/img/edit.svg" alt="edit"/>
            </div>
            <div className="line">
              <p className="text">+375196584225</p>
              <img className='editImg' src="/img/edit.svg" alt="edit"/>
            </div>
            <div className="line">
              <p className="text">arimbra@gmail.com</p>
              <img className='editImg' src="/img/edit.svg" alt="edit"/>
            </div>
            <div className="line">
              <p className="text">21.11.1989</p>
              <img className='editImg' src="/img/edit.svg" alt="edit"/>
            </div>
            <div className="line">
              <p className="text">г. Гродно ул. Высокая д. 6</p>
              <img className='editImg' src="/img/edit.svg" alt="edit"/>
            </div>
          </div>

        </div>
        <input className='buttonPass' type="button" value='Изменить пароль'/>
      </div>
    </div>
  );
};

export default Settings;
