import React, {useEffect, useState} from 'react';
import './AdminReserv.scss'

const AdminReserv = () => {
  const [isSelectActive, setSelectActive] = useState(true);
  const [apiReserv, setApiReserv] = useState([])

  useEffect(() => {
    getReservFoo()
  }, []);

  function getReservFoo() {
    fetch("http://localhost:3000/reservations/", {method: "GET", headers: {
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
      }})
      .then((response) => response.json())
      .then((data) => {
        setApiReserv(data);
      })
      .catch((error) => console.log(error));
  }

  function dellReservFoo(id) {
    fetch(`http://localhost:3000/reservations/${id}`, {method: "DELETE", headers: {
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
      }})
      .then((response) => response.json())
      .then((data) => {
        getReservFoo();
      })
      .catch((error) => console.log(error));
  }

  const resActive = apiReserv?.filter((v) => v.isActive)?.map((el) =>
    <div className="lineActive" key={el.id}>
      <p className='textWhite'>{el.user.secondName} {el.user.firstName}</p>
      <p className='textWhite'>{el.date.split('-').reverse().join('.')}</p>
      <p className='textWhite'>{el.count}</p>
      <p className='textWhite'>{el.time}</p>
      <img onClick={() => dellReservFoo(el.id)} className='imgDell' src="/img/icon-delete.svg" alt="delete"/>
    </div>
  )

  const resAll = apiReserv?.map((el) =>
    <div className="line" key={el.id}>
      <p className='textWhite'>{el.user.secondName} {el.user.firstName}</p>
      <p className='textWhite'>{el.date.split('-').reverse().join('.')}</p>
      <p className='textWhite'>{el.count}</p>
      <p className='textWhite'>{el.time}</p>
    </div>
  )

  return (
    <div className='adminReserv'>
      <div className="select">
        <p onClick={() => setSelectActive(true)} className={isSelectActive ? 'textWhite' : 'textBrown'}>Активные</p>
        <p onClick={() => setSelectActive(!isSelectActive)} className='textBrown'>&nbsp;/&nbsp;</p>
        <p onClick={() => setSelectActive(false)} className={isSelectActive ? 'textBrown' : 'textWhite'}>Все</p>
      </div>
      <div className="head">
        <p className='textBrown'>Пользователь</p>
        <p className='textBrown'>Дата</p>
        <p className='textBrown'>К-во человек</p>
        <p className='textBrown'>Время</p>
      </div>
      <div className="content">
        {isSelectActive ? resActive : resAll}
      </div>
    </div>
  );
};


export default AdminReserv;
