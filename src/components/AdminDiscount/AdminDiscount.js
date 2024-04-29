import React, {useState} from 'react';
import './AdminDiscount.scss'
import {dellFromCart, pushToCart} from "../../redux/commonSlice";

const AdminDiscount = () => {
  const [showCards, setShowCards] = useState(true)
  const [deleteCard, setDeleteCard]=useState(false)
  return (
    <div>
      {showCards ?
        <div className="showCards">
          <img onClick={()=>setShowCards(false)} className='imgPlus' src="/img/icon-plus.svg" alt="plus"/>
          <div className="discountsContainer">
            {deleteCard ?
              <div className="deleteCard">
                <p>Удалить запись?</p>
                <input onClick={()=>setDeleteCard(false)} className='button' type="button" value='Нет'/>
                <input onClick={()=>setDeleteCard(false)} className='button' type="button" value='Да'/>
              </div>
              :
              <div className="discountCards">
                <p>Скидки 30% постоянным клиентам</p>
                <img className='imgEdit' src="/img/edit.svg" alt="edit"/>
                <img onClick={()=>setDeleteCard(true)} className='imgDelete' src="/img/icon-delete.svg" alt="delete"/>
              </div>
            }

            <div className="discountCards">
              <p>Комплимент от заведения в честь дня рождения</p>
              <img className='imgEdit' src="/img/edit.svg" alt="edit"/>
              <img className='imgDelete' src="/img/icon-delete.svg" alt="delete"/>
            </div>
            <div className="discountCards">
              <p>Организация праздников по супер цене</p>
              <img className='imgEdit' src="/img/edit.svg" alt="edit"/>
              <img className='imgDelete' src="/img/icon-delete.svg" alt="delete"/>
            </div>
            <div className="discountCards">
              <p>Скидки 30% постоянным клиентам</p>
              <img className='imgEdit' src="/img/edit.svg" alt="edit"/>
              <img className='imgDelete' src="/img/icon-delete.svg" alt="delete"/>
            </div>
            <div className="discountCards">
              <p>Скидки 30% постоянным клиентам</p>
              <img className='imgEdit' src="/img/edit.svg" alt="edit"/>
              <img className='imgDelete' src="/img/icon-delete.svg" alt="delete"/>
            </div>
            <div className="discountCards">
              <p>Скидки 30% постоянным клиентам</p>
              <img className='imgEdit' src="/img/edit.svg" alt="edit"/>
              <img className='imgDelete' src="/img/icon-delete.svg" alt="delete"/>
            </div>
            <div className="discountCards">
              <p>Скидки 30% постоянным клиентам</p>
              <img className='imgEdit' src="/img/edit.svg" alt="edit"/>
              <img className='imgDelete' src="/img/icon-delete.svg" alt="delete"/>
            </div>
            <div className="discountCards">
              <p>Скидки 30% постоянным клиентам</p>
              <img className='imgEdit' src="/img/edit.svg" alt="edit"/>
              <img className='imgDelete' src="/img/icon-delete.svg" alt="delete"/>
            </div>
            {/*<div className="discountCards">*/}
            {/*  <p>Скидки 30% постоянным клиентам</p>*/}
            {/*  <img className='imgEdit' src="/img/edit.svg" alt="edit"/>*/}
            {/*  <img className='imgDelete' src="/img/icon-delete.svg" alt="delete"/>*/}
            {/*</div>*/}
          </div>
        </div>
      :
        <div className="editContainer">
          <img onClick={()=>setShowCards(true)} className='xIcone' src="/img/x-mark.svg" alt="x"/>
          <div className="nameDiscount">
            <p className="text">Акция:</p>
            <textarea className='textName' name="textName" value='Комплимент от заведения в честь дня рождения'/>
            <p className="textLimit">макс число символов: 40</p>
          </div>
          <div className="descrDiscount">
            <p className="text">Описание:</p>
            <textarea className='textDescr' name="textDescr" value='Скидка на меню: В течение недели с вашим днем рождения вы получаете 20% скидку на всё меню или на определенную категорию блюд (например, выпечка, десерты или основные блюда).'/>
          </div>
          <input className='button' type="button" value='Сохранить'/>
        </div>
      }

    </div>

  );
};

export default AdminDiscount;
