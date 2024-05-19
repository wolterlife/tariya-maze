import React, {useState} from 'react';
import './PopUpProfile.scss'
import {useDispatch} from "react-redux";
import {setPopUpProfileVisible} from "../../redux/commonSlice";
import {useNavigate} from 'react-router-dom';
const PopUpProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(false);

  function loginFoo() {
    if (login && pass) {
    fetch("http://localhost:3000/login", {
      method: "POST",
      body: JSON.stringify(
        {
          login: login,
          password: pass,
        }
      ),
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      }
    })
      .then(res => res.json())
      .then(result => {
        if (result.msg) return setError(true)
        localStorage.setItem("authToken", result.token);
        localStorage.setItem("userId", result.user.id);
        localStorage.setItem("userFirstName", result.user.firstName);
        localStorage.setItem("userSecondName", result.user.secondName);
        localStorage.setItem("userPatron", result.user.patronymic);
        localStorage.setItem("userDestination", result.user.address)
        localStorage.setItem("userMail", result.user.mail)
        localStorage.setItem("userPhone", result.user.phone)
        localStorage.setItem("userDOB", result.user.dateOfBirth)
        if (result.user.roles === 'admin') navigate('/admin')
        else navigate('/profile')
        dispatch(setPopUpProfileVisible(false))
      })
    }
  }

  return (
    <div className='popUpProfile'>
      <div className="content">
          <p className='textEntry'>Войдите в ваш аккаунт</p>
          <input onClick={() => dispatch(setPopUpProfileVisible(false))} className='buttonClose' type='image' src="/img/x-mark.svg" alt="X"/>
        <div className="line">
          <p className={error ? 'text red' : 'text'}>Email / № телефона</p>
          <input onChange={(e) => setLogin(e.target.value)} className='input' type="text"/>
        </div>
        <div className="line">
          <p className={error ? 'text red' : 'text'}>Пароль:</p>
          <input onChange={(e) => setPass(e.target.value)} className='input' type="password"/>
        </div>
        <button onClick={() => loginFoo()} className="buttonLogin">Войти</button>
        <p className='textInfo'>Если нет аккаунта необходимо пройти регистрацию</p>
        <input onClick={() => {
          navigate('/registration');
          dispatch(setPopUpProfileVisible(false))
        }} className='buttonRegister' type='button' value='Зарегистрироваться' />
        <img className='backgroundTop' src="/img/reg-top.svg" alt="background-img"/>
        <img className='backgroundBot' src="/img/reg-bot.svg" alt="background-img"/>
      </div>
    </div>
  );
};

export default PopUpProfile;
