import React, {useState} from 'react';
import './FormRegistration.scss'
import {useNavigate} from 'react-router-dom';

const FormRegistration = () => {
  const navigate = useNavigate()
  const [checkBoxStatus, setCheckBox] = useState(false);
  const [valueName, setValueName] = useState('');
  const [valueSecondName, setValueSecondName] = useState('');
  const [valuePatron, setValuePatron] = useState('');
  const [valueNumber, setValueNumber] = useState('');
  const [valueMail, setValueMail] = useState('');
  const [valueBTH, setValueBTH] = useState('');
  const [valueAdr, setValueAdr] = useState('');
  const [valuePass, setValuePass] = useState('');
  const [valueRepeat, setValueRepeat] = useState('');
  const [errorRepeatPass, setErrorRepeatPass] = useState(false);
  const [isError, setError] = useState(false);

  function registerFoo() {
    if (valueName && valueSecondName && valuePatron && valueNumber && valueMail && valueBTH && valueAdr && valuePass && valueRepeat && checkBoxStatus) {
      if (valuePass === valueRepeat) {
        fetch(`http://localhost:3000/registration/`, {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName: valueName,
            secondName: valueSecondName,
            patronymic: valuePatron,
            password: valuePass,
            dateOfBirth: valueBTH,
            phone: valueNumber,
            destination: valueAdr,
            mail: valueMail,
          })
        })
          .then((response) => response.json())
          .then((res) => {
            if (res.msg === 'Почта/номер телефона уже занят') setError(true)
            else {
              localStorage.setItem("authToken", res.token);
              localStorage.setItem("userId", res.user.id);
              localStorage.setItem("userFirstName", res.user.firstName);
              localStorage.setItem("userSecondName", res.user.secondName);
              localStorage.setItem("userPatron", res.user.patronymic);
              localStorage.setItem("userDestination", res.user.address)
              localStorage.setItem("userMail", res.user.mail)
              localStorage.setItem("userPhone", res.user.phone)
              localStorage.setItem("userDOB", res.user.dateOfBirth)
              navigate('/profile')
            }
          })
          .catch((error) => console.log(error));
      } else setErrorRepeatPass(true)
    } else console.log('Поле не заполнено')
  }

  return (
    <div className='formRegistration'>
      <img className='backgroundTop' src="/img/reg-top.svg" alt="background-img"/>
      <img className='backgroundBot' src="/img/reg-bot.svg" alt="background-img"/>
      <div className="line">
        <p className='text'>Фамилия:</p>
        <input onChange={(e) => setValueSecondName(e.target.value)} className='input' type='text'/>
      </div>
      <div className="line">
        <p className='text'>Имя:</p>
        <input onChange={(e) => setValueName(e.target.value)} className='input' type='text'/>
      </div>
      <div className="line">
        <p className='text'>Отчество:</p>
        <input onChange={(e) => setValuePatron(e.target.value)} className='input' type='text'/>
      </div>
      <div className="line">
        <p className={isError ? 'text red' : 'text'}>№ телефона:</p>
        <input onChange={(e) => setValueNumber(e.target.value)} className='input' type='tel'/>
      </div>
      <div className="line">
        <p className={isError ? 'text red' : 'text'}>Email:</p>
        <input onChange={(e) => setValueMail(e.target.value)} className='input' type='email'/>
      </div>
      <div className="line">
        <p className='text'>Дата рождения:</p>
        <input onChange={(e) => setValueBTH(e.target.value)} className='input' type='date'/>
      </div>
      <div className="line">
        <p className='text'>Адрес:</p>
        <input onChange={(e) => setValueAdr(e.target.value)} className='input' type='text'/>
      </div>
      <div className="line">
        <p className={errorRepeatPass ? 'text red' : 'text'}>Пароль:</p>
        <input onChange={(e) => setValuePass(e.target.value)} className='input' type='password'/>
      </div>
      <div className="line">
        <p className={errorRepeatPass ? 'text red' : 'text'}>Повторите пароль:</p>
        <input onChange={(e) => setValueRepeat(e.target.value)} className='input' type='password'/>
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
          <button onClick={() => registerFoo()} className='buttonRegister'>Зарегистрироваться</button>
        </div>
      </div>
    </div>
  );
};

export default FormRegistration;
