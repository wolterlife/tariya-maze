import React from 'react';
import './Advice.scss'

const Advice = ({advice = []}) => {

  const res =  advice.map((el, index) => (
    <div key={index} className="card">
      <img className='img' src={el.imgLink} alt="img"/>
      <p className='text'>{el.name}</p>
    </div>
  ))

  return (
    <div className='advice'>
      <p className='text'>Мы советуем</p>
      <div className="container">
        {res}
      </div>
      <p className='text'>Акции</p>
      <p className='textNow'>На данный момент нет акционных блюд</p>
    </div>
  );
};

export default Advice;
