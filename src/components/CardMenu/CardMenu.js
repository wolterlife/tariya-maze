import React, {useState} from 'react';
import {dellFromCart, pushToCart} from '../../redux/commonSlice';
import {useDispatch, useSelector} from 'react-redux';

const CardMenu = ({ isAdmin, el }) => {
  const dispatch = useDispatch()
  const { cart } = useSelector(state => state.common);
  const [confirmDell, setConfirmDell] = useState(false);

  return (
    <>
      {confirmDell ?
        <div className="card confirm">
          <p className='confirmText'>Удалить блюдо?</p>
          <div className='section'>
            <input onClick={() => setConfirmDell(false)} className='confirmButton' type="button" value='Нет'/>
            <input className='confirmButton' type="button" value='Да'/>
          </div>
        </div>
        :
        <div className={el.isDiscount ? 'card discount' : 'card'}>
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
            {isAdmin ?
              <img onClick={() => setConfirmDell(true)} className='remove' src="/img/icon-delete.svg" alt="remove"/> :
              <img onClick={() => dispatch(pushToCart(el))} className='add' src="/img/icon-plus.svg" alt="add"/>
            }
          </div>
        </div>
      }
    </>
  );
};

export default CardMenu;
