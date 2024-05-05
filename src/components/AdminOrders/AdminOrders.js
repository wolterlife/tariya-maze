import React, {useState} from 'react';
import './AdminOrders.scss'

const AdminOrders = () => {
  const [isSelectActive, setSelectActive] = useState(true);

  const arr = [
    {
      id: 0,
      title: 'Жаркое, жаркое, жаркое',
      comments: 'werty hvygfr ygvyfgvy',
      price: 241,
      isActive: true,
      user: "Брагимец Арим",
      date: '1 апреля 19:45',
      dest: ' ул. Высокая д. 6'
    },
    {
      id: 1,
      title: 'Лала, жаркое, жаркое',
      comments: '-',
      price: 242,
      isActive: false,
      user: "Брагимец Арим",
      date: '1 апреля 19:45',
      dest: ' ул. Высокая д. 6'
    },
    {
      id: 2,
      title: 'Жаркое, жаркое, жаркое',
      comments: 'werty hvygfr ygvyfgvy',
      price: 242,
      isActive: true,
      user: "Брагимец Арим",
      date: '1 апреля 19:45',
      dest: 'ул. Высокая д. 6'
    },
    {
      id: 3,
      title: 'Жаркое, жаркое, жаркое',
      comments: '-',
      price: 242,
      isActive: false,
      user: "Брагимец Арим",
      date: '1 апреля 19:45',
      dest: ' ул. Высокая д. 6'
    },
  ]

  const resActive = arr.filter((v) => v.isActive).map((el) =>
    <div className="lineActive" key={el.id}>
      <p className='textWhite'>{el.user}</p>
      <p className='textWhite'>{el.title}</p>
      <p className='textWhite'>{el.comments}</p>
      <p className='textWhite'>{el.price}</p>
      <p className='textWhite'>{el.date}</p>
      <p className='textWhite'>{el.dest}</p>
      <img className='imgDell' src="/img/icon-delete.svg" alt="delete"/>
    </div>
  )

  const resAll = arr.map((el) =>
    <div className="line" key={el.id}>
      <p className='textWhite'>{el.user}</p>
      <p className='textWhite'>{el.title}</p>
      <p className='textWhite'>{el.comments}</p>
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
