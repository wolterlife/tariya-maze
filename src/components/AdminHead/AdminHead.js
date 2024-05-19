import React, {useState} from 'react';
import './AdminHead.scss'
import AdminDiscount from '../AdminDiscount/AdminDiscount';
import AdminMenu from '../AdminMenu/AdminMenu';
import AdminNews from '../AdminNews/AdminNews';
import AdminAlert from '../AdminAlert/AdminAlert';
import AdminReserv from '../AdminReserv/AdminReserv';
import AdminOrders from '../AdminOrders/AdminOrders';

const AdminHead = () => {
  const [option, setOption] = useState(0);

  function selectorFoo(v) {
    if (v === option) setOption(0)
    else setOption(v)
  }

  return (
    <div className='adminHead'>
      <img src="/img/admin-background.svg" alt="background"/>
      <div className="darkContainer">
        <p className='text'>{localStorage.getItem('userSecondName')} {localStorage.getItem('userFirstName')}</p>
      </div>
      <div className="navMenu">
        <p onClick={() => selectorFoo(1)} className={option === 1 ? 'option selected' : 'option'}>Акции</p>
        <p onClick={() => selectorFoo(2)} className={option === 2 ? 'option selected' : 'option'}>Меню</p>
        <p onClick={() => selectorFoo(3)} className={option === 3 ? 'option selected' : 'option'}>Новости</p>
        <p onClick={() => selectorFoo(4)} className={option === 4 ? 'option selected' : 'option'}>Пользователи</p>
        <p onClick={() => selectorFoo(5)} className={option === 5 ? 'option selected' : 'option'}>Брони</p>
        <p onClick={() => selectorFoo(6)} className={option === 6 ? 'option selected' : 'option'}>Заказы</p>
      </div>
      {option === 1 && <AdminDiscount />}
      {option === 2 && <AdminMenu />}
      {option === 3 && <AdminNews />}
      {option === 4 && <AdminAlert />}
      {option === 5 && <AdminReserv />}
      {option === 6 && <AdminOrders />}
    </div>
  );
};

export default AdminHead;
