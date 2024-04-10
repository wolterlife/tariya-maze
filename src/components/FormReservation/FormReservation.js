import React, {useEffect, useState} from 'react';
import './FormReservation.scss'
import {useNavigate} from "react-router-dom";

const FormReservation = () => {
  const navigate = useNavigate();
  const [isOpenFirst, setOpenFirst] = useState(false)
  const [isOpenSecond, setOpenSecond] = useState(false)
  const [personValue, setPersonValue] = useState(2);
  const [timeValue, setTimeReserv] = useState('10:00');
  const [timeArr, setTimeArr] = useState(['10:00', "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30"])
  const [firstChanged, setFirstChanged] = useState(false)
  const [secondChanged, setSecondChanged] = useState(false)
  const [brConfirm, setBrConfirm] = useState(false);

  function getCurrentDay() {
    let d = new Date()
    let cd = num => num.toString().padStart(2, 0)
    return cd(d.getDate()) + '.' + cd(d.getMonth() + 1) + "." + d.getFullYear();
  }

  function confirmFoo() {
    setBrConfirm(true);
  }

  const resTime = timeArr.map(el =>
    <div key={el} onClick={() => setTimeReserv(el)} className="option">
      <p className='text'>{el}</p>
      <img className='line' src='/img/line-transparent.svg' alt='line'/>
    </div>
  )

  return (<div className='reservForm'>
    <div className="form">
      {brConfirm ?
        <div className='confirm'>
          <p className='textMain'>Бронь  выполнена успешно!</p>
          <p className='textSecondary'>Ждём вас у нас в 18:00 1 апреля (понедельник)</p>
          <button className='button' onClick={() => navigate('/')}>На главную</button>
        </div> :
        <div className='notConfirm'>
          <div className='top'>
            <img src="/img/lines-left-sm.svg" alt="left"/>
            <p className='textReserve'>Зарезервировать</p>
            <img src="/img/lines-right-sm.svg" alt="right"/>
          </div>
          <div className="center">
            <div className="box">
              <img className='icon' src="/img/reserv-ic1.svg" alt="icon"/>
              <div className="sd-container">
                <input
                  required aria-required="true"
                  data-placeholder={getCurrentDay()}
                  onChange={(v) => console.log(v.target.value)}
                  className="sd"
                  type="date"
                  name="selected_date"
                />
                <span className="open-button">
              <button type="button">
                <img className='arrow' src="/img/arrow-down-small.svg" alt="open"/>
              </button>
            </span>
              </div>
            </div>
            <div className="box">
              <img className='icon' src="/img/reserv-ic2.svg" alt="icon"/>
              <div tabIndex={0}
                   onClick={() => {
                     setOpenFirst(!isOpenFirst)
                     setFirstChanged(true);
                   }}
                   className={firstChanged ? "menuDrop wh" : 'menuDrop'}>
                <p className='text'>{personValue} чел</p>
                <img className={isOpenFirst ? "arrow-top" : "arrow"} src="/img/arrow-down-small.svg" alt="open"/>
                {isOpenFirst &&
                  <div className='selector'>
                    <div onClick={() => setPersonValue(1)} className="option">
                      <p className='text'>1</p>
                      <img className='line' src='/img/line-transparent.svg' alt='line'/>
                    </div>
                    <div onClick={() => setPersonValue(2)} className="option">
                      <p className='text'>2</p>
                      <img className='line' src='/img/line-transparent.svg' alt='line'/>
                    </div>
                    <div onClick={() => setPersonValue(3)} className="option">
                      <p className='text'>3</p>
                      <img className='line' src='/img/line-transparent.svg' alt='line'/>
                    </div>
                    <div onClick={() => setPersonValue(4)} className="option">
                      <p className='text'>4</p>
                      <img className='line' src='/img/line-transparent.svg' alt='line'/>
                    </div>
                    <div onClick={() => setPersonValue(5)} className="option">
                      <p className='text'>5</p>
                      <img className='line' src='/img/line-transparent.svg' alt='line'/>
                    </div>
                    <div onClick={() => setPersonValue(6)} className="option">
                      <p className='text'>6</p>
                      <img className='line' src='/img/line-transparent.svg' alt='line'/>
                    </div>
                    <div onClick={() => setPersonValue(7)} className="option">
                      <p className='text'>7</p>
                      <img className='line' src='/img/line-transparent.svg' alt='line'/>
                    </div>
                    <div onClick={() => setPersonValue(8)} className="option">
                      <p className='text'>8</p>
                      <img className='line' src='/img/line-transparent.svg' alt='line'/>
                    </div>
                    <div onClick={() => setPersonValue(9)} className="option">
                      <p className='text'>9</p>
                      <img className='line' src='/img/line-transparent.svg' alt='line'/>
                    </div>
                    <div onClick={() => setPersonValue(10)} className="option">
                      <p className='text'>10</p>
                      <img className='line' src='/img/line-transparent.svg' alt='line'/>
                    </div>
                    <div onClick={() => setPersonValue(11)} className="option">
                      <p className='text'>11</p>
                      <img className='line' src='/img/line-transparent.svg' alt='line'/>
                    </div>
                    <div onClick={() => setPersonValue(12)} className="option">
                      <p className='text'>12</p>
                    </div>
                  </div>
                }
              </div>
            </div>
            <div className="box">
              <img className='icon' src="/img/reserv-ic3.svg" alt="icon"/>
              <div tabIndex={0}
                   onClick={() => {
                     setOpenSecond(!isOpenSecond)
                     setSecondChanged(true);
                   }}
                   className={secondChanged ? "menuDrop wh" : 'menuDrop'}>
                <p className='text'>{timeValue}</p>
                <img className={isOpenSecond ? "arrow-top" : "arrow"} src="/img/arrow-down-small.svg" alt="open"/>
                {isOpenSecond &&
                  <div className='selector'>
                    {resTime}
                  </div>
                }
              </div>
            </div>
          </div>
          <button className='button' onClick={() => confirmFoo()}>Бронь</button>
        </div>
      }

    </div>
  </div>);
};

export default FormReservation;