import React from 'react';
import './AdminAlert.scss'

const AdminAlert = () => {
  return (
    <div className='adminAlert'>
      <div className="content">
        <div className="line">
          <p className='textWhite'>Пользователь</p>
          <p className='textBrown'>Брагимец Арим</p>
          <p className='textWhite'>совершил 10 заказов</p>
          <input className='button' type='button' value={'Значение кнопки'} />
        </div>
        <div className="line">
          <p className='textWhite'>Пользователь</p>
          <p className='textBrown'>Брагимецовичон Аримович</p>
          <p className='textWhite'>совершил очень много заказов</p>
          <input className='button' type='button' value={'Значение длинной кнопки'} />
        </div>
        <div className="line">
          <p className='textWhite'>Пользователь</p>
          <p className='textBrown'>Брагимец Арим</p>
          <p className='textWhite'>отмечает день рождение</p>
          <input className='button' type='button' value={'Отправить подарок'} />
        </div>
        <div className="line">
          <p className='textWhite'>Пользователь</p>
          <p className='textBrown'>Брагимец Арим</p>
          <p className='textWhite'>совершил 10 заказов</p>
          <input className='button' type='button' value={'Значение кнопки'} />
        </div>
        <div className="line">
          <p className='textWhite'>Пользователь</p>
          <p className='textBrown'>Брагимецовичон Аримович</p>
          <p className='textWhite'>совершил очень много заказов</p>
          <input className='button' type='button' value={'Значение длинной кнопки'} />
        </div>
        <div className="line">
          <p className='textWhite'>Пользователь</p>
          <p className='textBrown'>Брагимец Арим</p>
          <p className='textWhite'>отмечает день рождение</p>
          <input className='button' type='button' value={'Отправить подарок'} />
        </div>
      </div>
    </div>
  );
};

export default AdminAlert;
