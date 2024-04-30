import React from 'react';
import './AdminAlert.scss'

const AdminAlert = () => {

  const arr = [
    {
      id: 0,
      name: 'Брагимец Арим',
      number: '+375196584225',
    },
    {
      id: 1,
      name: 'Брагимецовичон Аримович',
      number: '+375196584225',
    },
    {
      id: 2,
      name: 'Брагимец Арим',
      number: '+375196584225',
    },
  ];


  const res = arr.map((el) =>
    <div className="line" key={el.id}>
      <p className='textName'>{el.name}</p>
      <p className='textWhite'>{el.number}</p>
      <input className='imgDell' type='image' src='/img/icon-delete.svg' alt='dell' />
    </div>
  )

  return (
    <div className='adminAlert'>
      <div className="head">
        <p className='textBrown'>Пользователь</p>
        <p className='textBrown'>Телефон</p>
        <p className='textBrown'>Удалить</p>
      </div>
      <div className="content">
        {res}
      </div>
    </div>
  );
};

export default AdminAlert;
