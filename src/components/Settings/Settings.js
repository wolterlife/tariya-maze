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
  const [valueFIO, setValueFIO] = useState(localStorage.getItem('userSecondName') + ' ' + localStorage.getItem('userFirstName') + ' ' + localStorage.getItem('userPatron'))
  const [valuePhone, setValuePhone] = useState(localStorage.getItem('userPhone'))
  const [valueMail, setValueMail] = useState(localStorage.getItem('userMail'))
  const [valueDOB, setValueDOB] = useState(localStorage.getItem('userDOB'))
  const [valueDest, setValueDest] = useState(localStorage.getItem('userDestination'))
  const [valuePassOld, setPassOld] = useState('')
  const [valuePassNew, setPassNew] = useState('')
  const [valuePassRep, setPassRep] = useState('')
  const [error, setError] = useState(false);
  const [errorPass, setErrorPass] = useState(0);

  function saveFoo() {
    if (valueFIO && valuePhone && valueMail && valueDOB && valueDest) {
    fetch(`http://localhost:3000/users/${localStorage.getItem('userId')}`, {
      method: "PUT",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
      },
      body: JSON.stringify({
    firstName: valueFIO.split(' ')[1],
    secondName: valueFIO.split(' ')[0],
    patronymic: valueFIO.split(' ')[2],
    dateOfBirth: valueDOB.split('.').reverse().join('-'),
    phone: valuePhone,
    mail: valueMail,
    destination: valueDest,
      })
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.msg === 'Почта/номер телефона уже занят') setError(true)
        else {
          setError(false)
          localStorage.setItem('userPhone', valuePhone)
          localStorage.setItem('userMail', valueMail)
        }
      })
      .catch((error) => console.log(error));
    }
  }

  function changePassFoo() {
    if (valuePassOld && valuePassNew && valuePassRep) {
      if (valuePassNew === valuePassRep) {
        fetch(`http://localhost:3000/pass/${localStorage.getItem('userId')}`, {
          method: "PUT",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`
          },
          body: JSON.stringify({
            password: valuePassOld,
            newPass: valuePassNew,
          })
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            if (data.msg === 'Успешно') {
              setPasswordSection(false)
              setErrorPass(0)
              setPassRep('')
              setPassOld('')
              setPassNew('')
            }
            else setErrorPass(2)
          })
          .catch((error) => console.log(error));
      } else setErrorPass(1)
    }
  }

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
                <p className={errorPass === 2 ? 'text red' : 'text'}>Старый пароль:</p>
                <input onChange={(e) => setPassOld(e.target.value)} className='input' type='password'/>
              </div>
              <div className="line">
                <p className={errorPass === 1 ? 'text red' : 'text'}>Новый пароль:</p>
                <input onChange={(e) => setPassNew(e.target.value)} className='input' type='password'/>
              </div>
              <div className="line">
                <p className={errorPass === 1 ? 'text red' : 'text'}>Поворите <br/> новый пароль:</p>
                <input onChange={(e) => setPassRep(e.target.value)} className='input' type='password'/>
              </div>
              <input onClick={() => changePassFoo()} type='button' className='button' value='Сохранить'/>
            </div>
          </div>
          :
          <>
            <div className="info">
              <div className="brownContainer">
                <p className='text'>Фамилия Имя Отчество:</p>
                <p className={error ? 'text red' : 'text'}>№ телефона:</p>
                <p className={error ? 'text red' : 'text'}>Почта:</p>
                <p className='text'>Дата рождения:</p>
                <p className='text'>Адрес:</p>
              </div>
              <div className="whiteContainer">
                {isEdit1 ?
                  <div className="line">
                    <input defaultValue={localStorage.getItem('userSecondName') + ' ' + localStorage.getItem('userFirstName') + ' ' + localStorage.getItem('userPatron')} className='input' onChange={(e) => {
                      let str = e.target.value.split(' ');
                      if (str[0] && str[1] && str[2] && e.target.value) {
                      setValueFIO(str[0] + " " + str[1] + " " + str[2])
                      localStorage.setItem('userFirstName', str[1])
                      localStorage.setItem('userSecondName', str[0])
                      localStorage.setItem('userPatron', str[2])
                      }
                     }
                    }/>
                    <input onClick={() => {
                      setEdit1(false)
                      saveFoo()
                    }} type='button' value='Сохранить' className='saveButton' src="/img/edit.svg" alt="edit"/>
                  </div>
                  :
                  <div className="line">
                    <p className="text">{localStorage.getItem('userSecondName')} {localStorage.getItem('userFirstName')} {localStorage.getItem('userPatron')}</p>
                    <img onClick={() => setEdit1(true)} className='editImg' src="/img/edit.svg" alt="edit"/>
                  </div>
                }
                {isEdit2 ?
                  <div className="line">
                    <input defaultValue={localStorage.getItem('userPhone')} className='input' onChange={(e) => {
                      if (e.target.value) setValuePhone(e.target.value)
                    }
                    }/>
                    <input onClick={() => {
                      setEdit2(false)
                      saveFoo()
                    }} type='button' value='Сохранить' className='saveButton'
                           src="/img/edit.svg" alt="edit"/>
                  </div>
                  :
                  <div className="line">
                    <p className="text">{localStorage.getItem('userPhone')}</p>
                    <img onClick={() => setEdit2(true)} className='editImg' src="/img/edit.svg" alt="edit"/>
                  </div>
                }
                {isEdit3 ?
                  <div className="line">
                    <input defaultValue={localStorage.getItem('userMail')} className='input' onChange={(e) => {
                      if (e.target.value) setValueMail(e.target.value)
                    }
                    }/>
                    <input onClick={() => {
                      setEdit3(false)
                      saveFoo()
                    }} type='button' value='Сохранить' className='saveButton'
                           src="/img/edit.svg" alt="edit"/>
                  </div>
                  :
                  <div className="line">
                    <p className="text">{localStorage.getItem('userMail')}</p>
                    <img onClick={() => setEdit3(true)} className='editImg' src="/img/edit.svg" alt="edit"/>
                  </div>
                }
                {isEdit4 ?
                  <div className="line">
                    <input defaultValue={localStorage.getItem('userDOB').split('-').reverse().join('.')} className='input' onChange={(e) => {
                      if (e.target.value) {
                        setValueDOB(e.target.value)
                        localStorage.setItem('userDOB', e.target.value)
                      }
                    }
                    }/>
                    <input onClick={() => {
                      setEdit4(false)
                      saveFoo()
                    }} type='button' value='Сохранить' className='saveButton' src="/img/edit.svg" alt="edit"/>
                  </div>
                  :
                  <div className="line">
                    <p className="text">{localStorage.getItem('userDOB').split('-').reverse().join('.')}</p>
                    <img onClick={() => setEdit4(true)} className='editImg' src="/img/edit.svg" alt="edit"/>
                  </div>
                }
                {isEdit5 ?
                  <div className="line">
                    <input defaultValue={localStorage.getItem('userDestination')} className='input' onChange={(e) => {
                      if (e.target.value) {
                        setValueDest(e.target.value)
                        localStorage.setItem('userDestination', e.target.value)
                      }
                    }
                    }/>
                    <input onClick={() => {
                      setEdit5(false)
                      saveFoo()
                    }} type='button' value='Сохранить' className='saveButton'
                           src="/img/edit.svg" alt="edit"/>
                  </div>
                  :
                  <div className="line">
                    <p className="text">{localStorage.getItem('userDestination')}</p>
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
