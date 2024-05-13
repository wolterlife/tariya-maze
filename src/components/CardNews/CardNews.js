import React, {useState} from 'react';
import './CardNews.scss'

const CardNews = ({el,setEditFoo,setNewsFoo,dellFoo}) => {
  const [deleteCard, setDeleteCard] = useState(false);
  return (
    <>
      {deleteCard ?
        <div className="deleteCard">
          <p>Удалить запись?</p>
          <input onClick={() => setDeleteCard(false)} className='button' type="button" value='Нет'/>
          <input onClick={() => {
            dellFoo(el.id)
            setDeleteCard(false)
          }} className='button' type="button" value='Да'/>
        </div>
        :
    <div className='cardNews'>
      <p className="title1">{el.title1}</p>
      <div className="bodyNews">
        <p className="title2">{el.title2}</p>
        <p className="descrNew">{el.description}</p>
        <img onClick={() => setDeleteCard(true)} className='deleteImg' src="/img/icon-delete.svg" alt="delete"/>
        <img onClick={()=> {
          setEditFoo(el);
          setNewsFoo(false)}
        } className='editImg' src="/img/edit.svg" alt="edit"/>
      </div>
    </div>
      }
    </>
  );
};

export default CardNews;
