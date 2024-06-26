import React, {useEffect, useState} from 'react';
import './AdminOrders.scss'

const AdminOrders = () => {
  const [isSelectActive, setSelectActive] = useState(true);
  const [orders, setOrders] = useState([])
  const [ordMenu, setOrderMenu] = useState([])

  function getOrders() {
    fetch("http://localhost:3000/orders/", {method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setOrders(data)
      })
      .catch((error) => console.log(error));

    fetch("http://localhost:3000/orders_menu/", {method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setOrderMenu(data)
      })
      .catch((error) => console.log(error));
  }

  function dellFoo(id) {
    fetch(`http://localhost:3000/orders/${id}`, { method: "DELETE", headers: {
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
      } })
      .then((response) => response.json())
      .then(() => {
        getOrders()
      })
      .catch((error) => console.log(error));
  }

  function chk(t) {
    if (t.length < 5) return '0' + t
    return t;
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

    let ordMonth = el.date.split(', ')[0].split(' ')[1]
    let ordDay = el.date.split(', ')[0].split(' ')[0]
    let ordTime = chk(el.date.split(', ')[1])
    let data = new Date(`${new Date().getFullYear()}-${getMonthByName(ordMonth)}-${ordDay}`)
    data.setMinutes(+ordTime.split(':')[1])
    data.setHours(+ordTime.split(':')[0])
    let now = new Date()
    return (+now < +data);
  }

  useEffect(() => {
    getOrders()
  }, []);



  const resActive = orders.filter((v) => chkOrder(v)).map((el) =>
    <div className="lineActive" key={el.id}>
      <p className='textWhite'>{el.user.secondName} {el.user.firstName}</p>
      <p className='textWhite'>{ordMenu.filter((j) => j.order.id === el.id).map((m) => m.item_id.name + " x" + m.count + ', ')}</p>
      <p className='textWhite'>{el.comment ? el.comment : '-'}</p>
      <p className='textWhite'>{el.price}</p>
      <p className='textWhite'>{el.date}</p>
      <p className='textWhite'>{el.dest}</p>
      <img onClick={() => dellFoo(el.id)} className='imgDell' src="/img/icon-delete.svg" alt="delete"/>
    </div>
  )

  const resAll = orders.map((el) =>
    <div className="line" key={el.id}>
      <p className='textWhite'>{el.user.secondName} {el.user.firstName}</p>
      <p className='textWhite'>{ordMenu.filter((j) => j.order.id === el.id).map((m) => m.item_id.name + " x" + m.count + ', ')}</p>
      <p className='textWhite'>{el.comment ? el.comment : '-'}</p>
      <p className='textWhite'>{el.price}</p>
      <p className='textWhite'>{el.date}</p>
      <p className='textWhite'>{el.dest}</p>
    </div>
  )

  return (
    <div className='adminOrders'>
      <div className="select">
        <p onClick={() => setSelectActive(true)} className={isSelectActive ? 'textWhite' : 'textBrown'}>Активные</p>
        <p onClick={() => setSelectActive(!isSelectActive)} className='textBrown'>&nbsp;/&nbsp;</p>
        <p onClick={() => setSelectActive(false)} className={isSelectActive ? 'textBrown' : 'textWhite'}>Все</p>
      </div>
      <div className="head">
        <p className='textBrown'>Пользователь</p>
        <p className='textBrown'>Заказ</p>
        <p className='textBrown'>Коментарии</p>
        <p className='textBrown'>Цена</p>
        <p className='textBrown'>Дата, Время</p>
        <p className='textBrown'>Адрес</p>
      </div>
      <div className="content">
        {isSelectActive ? resActive : resAll}
      </div>
    </div>
  );
};

export default AdminOrders;
