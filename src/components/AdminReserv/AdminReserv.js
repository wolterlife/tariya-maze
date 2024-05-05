import React, {useState} from 'react';
import './AdminReserv.scss'

const AdminReserv = () => {
  const [isSelectActive, setSelectActive] = useState(true);

  const arr = [
    {
      id: 0,
      count: 1,
      date: '15 марта',
      time: '20:00',
      isActive: false,
      user: 'Брагимец Арим'
    },
    {
      id: 1,
      count: 2,
      date: '13 марта',
      time: '20:00',
      isActive: false,
      user: 'Брагимец Арим'
    },
    {
      id: 2,
      count: 5,
      date: '20 марта',
      time: '21:00',
      isActive: true,
      user: 'Брагимец Арим'
    },
  ];

  const resActive = arr.filter((v) => v.isActive).map((el) =>
    <div className="lineActive" key={el.id}>
      <p className='textWhite'>{el.user}</p>
      <p className='textWhite'>{el.date}</p>
      <p className='textWhite'>{el.count}</p>
      <p className='textWhite'>{el.time}</p>
      <img className='imgDell' src="/img/icon-delete.svg" alt="delete"/>
    </div>
  )

  const resAll = arr.map((el) =>
    <div className="line" key={el.id}>
      <p className='textWhite'>{el.user}</p>
      <p className='textWhite'>{el.date}</p>
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
