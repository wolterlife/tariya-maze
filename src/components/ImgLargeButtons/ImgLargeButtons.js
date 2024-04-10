import React from 'react';
import './ImgLargeButtons.scss'
import {useNavigate} from "react-router-dom";

const ImgLargeButtons = () => {
  const navigate = useNavigate()
  return (
    <div className='backgroundImg'>
      <div className="content">
        <div className="topContainer">
          <img src="/img/lines-m-left.svg" alt="lines"/>
          <p className='text'>Выбери свой путь вкуса</p>
          <img src="/img/lines-m-right.svg" alt="lines"/>
        </div>
        <div className="bottomContainer">
          <div onClick={() => navigate('/reserv')} tabIndex='0' className="button">
            <p className='text'>Бронировать стол</p>
          </div>
          <div tabIndex='0' className="button">
            <p className='text'>Сделать заказ</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImgLargeButtons;