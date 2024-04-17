import React, {useState} from 'react';
import './MenuSection.scss'
import {useDispatch, useSelector} from "react-redux";
import commonSlice, {dellFromCart, pushToCart} from "../../redux/commonSlice";

const MenuSection = ({title, head = ['', '', ''], menuFirst = [], menuSecond = [], menuThird = []}) => {
  const dispatch = useDispatch()
  const {cart} = useSelector(state => state.common);
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [selectedHead, setSelectedHead] = useState(0)

  const resHead = head.map((el, index) =>
    <div key={index} className={(selectedHead === index) ? 'selected' : 'containerHead'}
         onClick={() => setSelectedHead(index)}>
      <p className='textHead'>{el}</p>
    </div>)

  const resMenuFirst = menuFirst.map((el, index) =>
    <div key={index} className={el.isDiscount ? 'card discount' : 'card'}>
      <img src={el.imgLink} alt="img"/>
      <div className='textBlock'>
        <p className='name'>{el.name}</p>
        <p className='description'>{el.description}</p>
        <div className='low'>
          <p className='price'>{el.price}</p>
          <p className='val'>{el.val}</p>
        </div>
      </div>
      <div className='buttons'>
        {cart.filter(x => x.name === el.name).length > 0 &&
          <>
            <img onClick={() => dispatch(dellFromCart(el))} className='dell' src="/img/icon-minus.svg" alt="dell"/>
            <p className='count'>{cart.filter(x => x.name === el.name).length}</p>
          </>
        }
        <img onClick={() => dispatch(pushToCart(el))} className='add' src="/img/icon-plus.svg" alt="add"/>
      </div>
    </div>)

  const resMenuSecond = menuSecond.map((el, index) =>
    <div key={index} className={el.isDiscount ? 'card discount' : 'card'}>
      <img src={el.imgLink} alt="img"/>
      <div className='textBlock'>
        <p className='name'>{el.name}</p>
        <p className='description'>{el.description}</p>
        <div className='low'>
          <p className='price'>{el.price}</p>
          <p className='val'>{el.val}</p>
        </div>
      </div>
      <div className='buttons'>
        {cart.filter(x => x.name === el.name).length > 0 &&
          <>
            <img onClick={() => dispatch(dellFromCart(el))} className='dell' src="/img/icon-minus.svg" alt="dell"/>
            <p className='count'>{cart.filter(x => x.name === el.name).length}</p>
          </>
        }
        <img onClick={() => dispatch(pushToCart(el))} className='add' src="/img/icon-plus.svg" alt="add"/>
      </div>
    </div>)

  const resMenuThird = menuThird.map((el, index) =>
    <div key={index} className={el.isDiscount ? 'card discount' : 'card'}>
      <img src={el.imgLink} alt="img"/>
      <div className='textBlock'>
        <p className='name'>{el.name}</p>
        <p className='description'>{el.description}</p>
        <div className='low'>
          <p className='price'>{el.price}</p>
          <p className='val'>{el.val}</p>
        </div>
      </div>
      <div className='buttons'>
        {cart.filter(x => x.name === el.name).length > 0 &&
          <>
            <img onClick={() => dispatch(dellFromCart(el))} className='dell' src="/img/icon-minus.svg" alt="dell"/>
            <p className='count'>{cart.filter(x => x.name === el.name).length}</p>
          </>
        }
        <img onClick={() => dispatch(pushToCart(el))} className='add' src="/img/icon-plus.svg" alt="add"/>
      </div>
    </div>)

  return (
    <div className='menu'>
      <p className={!isMenuOpen ? 'title' : 'title title-open'} onClick={() => setMenuOpen(!isMenuOpen)}>{title}</p>
      {isMenuOpen ?
        <div className="open">
          <div className='head'>
            {resHead}
          </div>
          <div className="outside">
            <img src="/img/menuBackground.svg" alt="background"/>
            <div className='inside'>
              <div className="cards">
                {selectedHead === 0 && resMenuFirst}
                {selectedHead === 1 && resMenuSecond}
                {selectedHead === 2 && resMenuThird}
              </div>
            </div>
            <img className='imgRevert' src="/img/menuBackground.svg" alt="background"/>
          </div>

        </div>
        : <img src="/img/menuLine.svg" alt="line"/>}
    </div>
  );
};

export default MenuSection;