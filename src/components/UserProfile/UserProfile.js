import React, {useEffect, useState} from 'react';
import './UserProfile.scss'
import {useNavigate} from 'react-router-dom';
import {setPopUpProfileVisible} from '../../redux/commonSlice';

const UserProfile = ({ orders = [], reservations = [] }) => {
  const navigate = useNavigate()
  const [isShowOrders, setShowOrders] = useState(true);
  const [isHistoryVisible, setHistoryVisible] = useState(false)
  const [visibleReview, setVisibleReview] = useState(false);
  const [valueReview, setValueReview] = useState('')
  const [starStatus, setStarStatus] = useState(0)

  function sendReview() {
    if (starStatus && valueReview) {
    fetch(`http://localhost:3000/reviews/`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
      },
      body: JSON.stringify({
        stars: starStatus,
        text: valueReview,
        user: localStorage.getItem('userFirstName')
      })
    })
      .then((response) => response.json())
      .then((res) => {
        setVisibleReview(false);
        setStarStatus(0)
        setValueReview('')
      })
      .catch((error) => console.log(error));
    }
  }

  const resOrders = orders?.map((el) =>
    <div key={el.id} className="card">
      {el.isActive && <p className='textActive'>Сейчас активен</p>}
      <div className="part">
        <p className='head'>Заказ</p>
        <p className='text'>{el.title}</p>
      </div>
      <div className="part">
        <p className='head'>Цена</p>
        <p className='text'>{el.price}$</p>
      </div>
      <div className="part">
        <p className='head'>Дата,время</p>
        <p className='text'>{el.date}</p>
      </div>
    </div>
  )

  const resReserv = reservations?.map((el) =>
    <div key={el.id} className="card">
      {el.isActive && <p className='textActive'>Сейчас активен</p>}
      <div className="part">
        <p className='head'>Дата</p>
        <p className='text'>{el.date.split('-').reverse().join('.')}</p>
      </div>
      <div className="part">
        <p className='head'>к-во человек</p>
        <p className='text'>{el.count}</p>
      </div>
      <div className="part">
        <p className='head'>Время</p>
        <p className='text'>{el.time}</p>
      </div>
    </div>
  )

  return (
    <>
      <div className='userProfile'>
        <img className='lines' src="/img/profile-user-lines.svg" alt="lines"/>
        <div className='containerInfo'>
          <p className='text'>{localStorage.getItem('userSecondName')}</p>
          <p className='text'>{localStorage.getItem('userFirstName')}</p>
          <p className='text'>{localStorage.getItem('userPatron')}</p>
        </div>
        <div className="user">
          <p className='text'>{localStorage.getItem('userPhone')}</p>
          <p className='text'>{localStorage.getItem('userMail')}</p>
          <p className='text'>{localStorage.getItem('userDOB').split('-').reverse().join('.')}</p>
          <p className='text'>{localStorage.getItem('userDestination')}</p>
          {!isHistoryVisible &&
            <input onClick={() => setHistoryVisible(true)} className='button' type='button' value='История заказов'/>
          }
        </div>
        <div className="right">
          <div className="countOrders">
            <p className='textCount'>{orders.length}</p>
            <p className='textOrders'>Заказов</p>
          </div>
          {orders.length >= 10 &&
            <div className="alert">
              <p className='text'>Вы можете зарегистрировать <br/> карту постоянного клиента</p>
              <img className='img' src="/img/right-alert.svg" alt="right"/>
            </div>
          }
          <input onClick={() => {
            setHistoryVisible(false)
            navigate('/settings')
          }} className='settings' type="image" src='/img/settings.svg' alt='settings'/>
        </div>
      </div>
      <div className="historyPart">
        <img className='background' src="/img/backgr-user.png" alt="background"/>
        <div className={isHistoryVisible ? 'inside' : 'hiden'}>
          <p className='textHistory'>История</p>
          <img onClick={() => setHistoryVisible(false)} src="/img/x-mark.svg" alt="" className="close"/>
          <div className="lineSecond">
            <p onClick={() => setShowOrders(true)} className={isShowOrders ? 'textReserv' : 'textDeliv'}>Доставки</p>
            <p className='textSlash'>/</p>
            <p onClick={() => setShowOrders(false)} className={!isShowOrders ? 'textReserv' : 'textDeliv'}>Бронь</p>
          </div>
          <div className="cards">
            {isShowOrders ? resOrders : resReserv}
          </div>
        </div>
        <input onClick={() => setVisibleReview(true)} className='button' type="button" value='Написать отзыв'/>
      </div>
      {visibleReview &&
        <div className='reviewPopUp'>
          <div className="review">
            <input onClick={() => setVisibleReview(false)} className='xmark' type="image" src='/img/x-mark.svg' alt='x'/>
            <div className="top">
              <p className='name'>{localStorage.getItem('userFirstName')}:</p>
              <div className="stars">
                <img onClick={() => setStarStatus(1)} className='star' src={(starStatus >= 1) ? '/img/star-true.svg' : '/img/star-false.svg' } alt="1"/>
                <img onClick={() => setStarStatus(2)} className='star' src={(starStatus >= 2) ? '/img/star-true.svg' : '/img/star-false.svg' } alt="2"/>
                <img onClick={() => setStarStatus(3)} className='star' src={(starStatus >= 3) ? '/img/star-true.svg' : '/img/star-false.svg' } alt="3"/>
                <img onClick={() => setStarStatus(4)} className='star' src={(starStatus >= 4) ? '/img/star-true.svg' : '/img/star-false.svg' } alt="4"/>
                <img onClick={() => setStarStatus(5)} className='star' src={(starStatus >= 5) ? '/img/star-true.svg' : '/img/star-false.svg' } alt="5"/>
              </div>
            </div>
            <textarea onChange={(e) => setValueReview(e.target.value)} className='input' name="comment" />
            <input onClick={() => sendReview()} type='button' className='buttonSend' value='Отправить' />
          </div>
        </div>
      }
    </>
  );
};

export default UserProfile;
