import React, {useState} from 'react';
import './Settings.scss'
import {useNavigate} from 'react-router-dom';

const Settings = () => {
  const navigate = useNavigate()
  const [isPasswordSection, setPasswordSection] = useState(false);
  const [isEdit1, setEdit1] = useState(false);
  const [isEdit2, setEdit2] = useState(false);
  const [isEdit3, setEdit3] = useState(false);
  const [isEdit4, setEdit4] = useState(false);
  const [isEdit5, setEdit5] = useState(false);

  return (
    <div className='settings'>
      <img className='image' src="/img/backgr-user.png" alt="background"/>
      <div className="window">
        <img onClick={() => navigate('/profile')} className='xmark' src="/img/x-mark.svg" alt="x"/>
        <img className='leftImg' src="/img/lines-sett-left.svg" alt="left"/>
        <img className='rightImg' src="/img/lines-sett-right.svg" alt="right"/>

        {isPasswordSection ?
          <div className="password">
            <div className="content">
              <div className="line">
                <p className='text'>Старый пароль:</p>
                <input className='input' type='password'/>
              </div>
              <div className="line">
                <p className='text'>Новый пароль:</p>
                <input className='input' type='password'/>
              </div>
              <div className="line">
                <p className='text'>Поворите <br/> новый пароль:</p>
                <input className='input' type='password'/>
              </div>
              <input type='button' className='button' value='Сохранить'/>
            </div>
          </div>
          :
          <>
            <div className="info">
              <div className="brownContainer">
                <p className='text'>Фамилия Имя Отчество:</p>
                <p className='text'>№ телефона:</p>
                <p className='text'>Почта:</p>
                <p className='text'>Дата рождения:</p>
                <p className='text'>Адрес:</p>
              </div>
              <div className="whiteContainer">
                {isEdit1 ?
                  <div className="line">
                    <input defaultValue='SomeDefaultValue' className='input'/>
                    <input onClick={() => setEdit1(false)} type='button' value='Сохранить' className='saveButton'
                           src="/img/edit.svg" alt="edit"/>
                  </div>
                  :
                  <div className="line">
                    <p className="text">Брагимец Арим Константинович</p>
                    <img onClick={() => setEdit1(true)} className='editImg' src="/img/edit.svg" alt="edit"/>
                  </div>
                }
                {isEdit2 ?
                  <div className="line">
                    <input defaultValue='SomeDefaultValue' className='input'/>
                    <input onClick={() => setEdit2(false)} type='button' value='Сохранить' className='saveButton'
                           src="/img/edit.svg" alt="edit"/>
                  </div>
                  :
                  <div className="line">
                    <p className="text">+375196584225</p>
                    <img onClick={() => setEdit2(true)} className='editImg' src="/img/edit.svg" alt="edit"/>
                  </div>
                }
                {isEdit3 ?
                  <div className="line">
                    <input defaultValue='SomeDefaultValue' className='input'/>
                    <input onClick={() => setEdit3(false)} type='button' value='Сохранить' className='saveButton'
                           src="/img/edit.svg" alt="edit"/>
                  </div>
                  :
                  <div className="line">
                    <p className="text">arimbra@gmail.com</p>
                    <img onClick={() => setEdit3(true)} className='editImg' src="/img/edit.svg" alt="edit"/>
                  </div>
                }
                {isEdit4 ?
                  <div className="line">
                    <input defaultValue='SomeDefaultValue' className='input'/>
                    <input onClick={() => setEdit4(false)} type='button' value='Сохранить' className='saveButton'
                           src="/img/edit.svg" alt="edit"/>
                  </div>
                  :
                  <div className="line">
                    <p className="text">21.11.1989</p>
                    <img onClick={() => setEdit4(true)} className='editImg' src="/img/edit.svg" alt="edit"/>
                  </div>
                }
                {isEdit5 ?
                  <div className="line">
                    <input defaultValue='SomeDefaultValue' className='input'/>
                    <input onClick={() => setEdit5(false)} type='button' value='Сохранить' className='saveButton'
                           src="/img/edit.svg" alt="edit"/>
                  </div>
                  :
                  <div className="line">
                    <p className="text">г. Гродно ул. Высокая д. 6</p>
                    <img onClick={() => setEdit5(true)} className='editImg' src="/img/edit.svg" alt="edit"/>
                  </div>
                }
              </div>
            </div>
            <input onClick={() => setPasswordSection(true)} className='buttonPass' type="button"
                   value='Изменить пароль'/>
          </>
        }
      </div>
    </div>
  );
};

export default Settings;
