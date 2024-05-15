import React, {useState} from 'react';

const CardDiscount = ({el, setCardsFoo, setEditFoo, dellFoo}) => {
  const [deleteCard, setDeleteCard] = useState(false);
  return (
    <>
      {deleteCard ?
        <div className="deleteCard">
          <p>Удалить запись?</p>
          <input onClick={() => setDeleteCard(false)} className='button' type="button" value='Нет'/>
          <input onClick={() => {
            setDeleteCard(false)
            dellFoo(el.id)
          }} className='button' type="button" value='Да'/>
        </div>
        :
        <div className="discountCards">
          <p>{el.name}</p>
          <img onClick={() => {
            setEditFoo(el);
            setCardsFoo(false);
          }} className='imgEdit' src="/img/edit.svg" alt="edit"/>
          <img onClick={() => {
            setDeleteCard(true)
          }} className='imgDelete' src="/img/icon-delete.svg" alt="delete"/>
        </div>
      }
    </>
  );
};

export default CardDiscount;
