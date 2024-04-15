import React from 'react';
import './Advice.scss'

const Advice = ({advice = []}) => {

  function randomitems(arr, returnedCount){
    function shuffle(array) {
      array.sort(() => Math.random() - 0.5);
    }
    const clonedData = arr.slice()
    shuffle(clonedData)
    if ( returnedCount === undefined) return clonedData;
    return clonedData.slice(-1 * returnedCount)
  }

  const res =  randomitems(advice, 8).map((el, index) => (
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