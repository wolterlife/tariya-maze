import React, {useState} from 'react';
import './UserProfile.scss'
import {useNavigate} from 'react-router-dom';

const UserProfile = ({ orders = [], reservations = [], ordMenu = [] }) => {
  const navigate = useNavigate()
  const [isShowOrders, setShowOrders] = useState(true);
  const [isHistoryVisible, setHistoryVisible] = useState(false)
  const [visibleReview, setVisibleReview] = useState(false);
  const [valueReview, setValueReview] = useState('')
  const [starStatus, setStarStatus] = useState(0)

  function chk(t) {
    if (t.length < 5) return '0' + t
    return t;
  }

  function chkReserv(el) {
    let data = new Date(el.date)
    data.setHours(el.time.split(':')[0])
    data.setMinutes(el.time.split(':')[1])
    let now = new Date()
    return (chk(+now) < chk(+data));
  }

  function chkOrder(el) {
    function getMonthByName(n) {
      switch (n) {
        case 'январь':
          return '01'
        case 'февраль':
          return '02'
        case 'март':
          return '03'
        case 'апрель':
          return '04'
        case 'май':
          return '05'
        case 'июнь':
          return '06'
        case 'июль':
          return '07'
        case 'август':
          return '08'
        case 'сентябрь':
          return '09'
        case 'октябрь':
          return '10'
        case 'ноябрь':
          return '11'
        case 'декабрь':
          return '12'
      }
    }

    let ordTime = chk(el.date.split(', ')[1])
    let ordDay = el.date.split(', ')[0].split(' ')[0]
    let ordMonth = el.date.split(', ')[0].split(' ')[1]
    let data = new Date(`${new Date().getFullYear()}-${getMonthByName(ordMonth)}-${ordDay}`)
    data.setHours(+ordTime.split(':')[0])
    data.setMinutes(+ordTime.split(':')[1])
    let now = new Date()
    return (+now < +data);
  }

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
      .then(() => {
        setVisibleReview(false);
        setStarStatus(0)
        setValueReview('')
      })
      .catch((error) => console.log(error));
    }
  }

  const resOrders = orders?.map((el) =>
    <div key={el.id} className="card">
      {
        chkOrder(el)
        && <p className='textActive'>Сейчас активен</p>}
      <div className="part">
        <p className='head'>Заказ</p>
        <p className='text'>{ordMenu.filter((j) => j.order?.id === el?.id).map((m) => m.item_id.name + " x" + m.count + ', ')}</p>
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
      {chkReserv(el) && <p className='textActive'>Сейчас активен</p>}
      <div className="part">
        <p className='head'>Дата</p>
        <p className='text'>{el.date?.split('-').reverse().join('.')}</p>
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
          <p className='text'>{localStorage.getItem('userDOB')?.split('-').reverse().join('.')}</p>
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
          <div className='btnCont'>
            <input onClick={() => {
              localStorage.clear()
              navigate('/')
            }} className='exit' type='button' value='Выйти'/>
            <input onClick={() => {
              setHistoryVisible(false)
              navigate('/settings')
            }} className='settings' type="image" src='/img/settings.svg' alt='settings'/>
          </div>
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
