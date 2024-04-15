import React from 'react';
import './SelectInfo.scss'

const SelectInfo = ({advice = []}) => {
  function randomitems(arr, returnedCount){
    function shuffle(array) {
      array.sort(() => Math.random() - 0.5);
    }
    const clonedData = arr.slice()
    shuffle(clonedData)
    if ( returnedCount === undefined) return clonedData;
    return clonedData.slice(-1 * returnedCount)
  }

  const res =  randomitems(advice, 6).map((el, index) => (
    <div key={index} className="card">
      <img className='img' src={el.imgLink} alt="img"/>
      <p className='text'>{el.name}</p>
    </div>
  ))

  return (
    <div className='select'>
      <p className='text'>Мы советуем</p>
      <div className='advice'>
        {res}
      </div>
      <p className='text'>Меню</p>
      <p className='textSmall'>Уважаемые посетители, вынуждены вас проинформировать, <br/> что не на все блюда возможно доставка</p>
      <p className='textBeige'>При наличии, акционные блюда будут выделены в меню</p>
      <input
        className='search'
        type="text"
        placeholder="Найти блюдо"
      />
    </div>
  );
};

export default SelectInfo;