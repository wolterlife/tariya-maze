import React from 'react';
import './ImgDelivery.scss'
import {useNavigate} from "react-router-dom";

const ImgDelivery = ({button}) => {
  const navigate = useNavigate();
  return (
    <div className='imgDelivery'>
      <img className='linesLeft' src="/img/lines-delivery-left.svg" alt="lines"/>
      <img className='linesRight' src="/img/lines-delivery-right.svg" alt="lines"/>
      {button &&
        <div
          onClick={() => {navigate('/select')}}
          tabIndex={0}
          className='button'>
          <p className='text'>Перейти к меню</p>
        </div>
      }
    </div>
  );
};

export default ImgDelivery;