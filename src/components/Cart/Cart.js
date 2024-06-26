import React, {useEffect, useState} from 'react';
import './Cart.scss'
import {clearCart, dellFromCart, pushToCart} from "../../redux/commonSlice";
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [isPrevOrder, setPrevOrder] = useState(true)
  const [isOpenSecond, setOpenSecond] = useState(false)
  const [changed, setChanged] = useState(false)
  const [PaymentValue, setPaymentValue] = useState('картой курьеру');
  const [dest, setDest] = useState(localStorage.getItem('userDestination'));
  const [isCartWindow, setCartWindow] = useState(true)
  const [comment, setComment] = useState('');
  const [people, setPeople] = useState("1");
  const [time, setTime] = useState("10:00");
  const { cart } = useSelector(state => state.common);
  const [res, setRes] = useState([])

  function converter() {
    setRes([...cart.reduce( (mp, o) => {
      if (!mp.has(o.id)) mp.set(o.id, { ...o, count: 0 });
      mp.get(o.id).count++;
      return mp;
    }, new Map()).values()])
  }

  async function sendOrder() {
    let b = new Date();
    const monthName = b.toLocaleString('default', { month: 'long' });
    fetch(`http://localhost:3000/orders/`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
      },
      body: JSON.stringify({
        date: b.getDate() + ' ' + monthName + ', ' +  time,
        dest: dest,
        comment: comment,
        people: people,
        paymentValue: PaymentValue,
        price: res.slice(1).reduce((acc, a) => a.price * a.count + acc, 0),
        user: localStorage.getItem('userId')
      })
    })
      .then((response) => response.json())
      .then((r) => {
        setCartWindow(false)
        res.slice(1).forEach((el) => {
            fetch(`http://localhost:3000/orders_menu/`, {
              method: "POST",
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('authToken')}`
              },
              body: JSON.stringify({
                order: r.id,
                item_id: el.id,
                count: el.count
              })
            })
              .then(() => dispatch(clearCart()))
              .catch((error) => console.log(error));
        })
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    converter();
  }, [cart]);



  const final = res.slice(1).sort((a, b) => a.id - b.id).map(el => {
    return (
      <div key={el.id} className={'card' ? 'card' : 'card  discount'}>
        <img src={'https://i.imgur.com/BkZT3MG.jpeg'} alt="img"/>
        <div className='textBlock'>
          <div className="infoTextBlock">
            <p className='name'>{el.name}</p>
            <p className='description'>{el.description}</p>
            <p className='val'>{el.val}</p>
          </div>
          <div className='price'>{el.price}$</div>
        </div>
        <div className='buttons'>
          <>
            <img onClick={() => dispatch(dellFromCart(el))} className='dell' src="/img/icon-minus.svg" alt="dell"/>
            <p className='count'>{el.count}</p>
          </>
          <img onClick={() => dispatch(pushToCart(el))} className='add' src="/img/icon-plus.svg" alt="add"/>
        </div>
      </div>
    )
  })

  return (
    <div className='cart'>
      <div className="imgBackground">
        <img className='linesLeft' src="/img/lines-delivery-left.svg" alt="lines"/>
        <img className='linesRight' src="/img/lines-delivery-right.svg" alt="lines"/>
        {isCartWindow ?
          <div className="cartWindow">
            <div className="topWindow">
              <p className="topText">Ваш заказ</p>
              <img src="/img/cart-icon.svg" alt="cart" className="cartImg"/>
              <div className="brownLine"></div>
            </div>
            {isPrevOrder ?
              <div className="mainWindow">
                <div className="main">
                  <div className="orderField">
                    {final}
                  </div>
                  <div className="cartInfo">
                    <p className="nameText">Брагимец Арим</p>
                    <div className="info">
                      <img className='iconsLoc' src="/img/footer-location.svg" alt="location"/>
                      <input onChange={(v) => setDest(v.target.value)} defaultValue={localStorage.getItem('userDestination')} className="infoText input"/>
                    </div>
                    <div className="info">
                      <img className='iconsUs' src="/img/reserv-ic2.svg" alt="location"/>
                      <input onChange={(v) => setPeople(v.target.value)} defaultValue={1} className="infoText input"/>
                    </div>
                    <div className="info">
                      <img className='iconsTime' src="/img/reserv-ic3.svg" alt="location"/>
                      <input onChange={(v) => setTime(v.target.value)} defaultValue={'10:00'} className="infoText input"/>
                    </div>
                    <div className="comment">
                      <p className="commentsText">Коментарии к заказу:</p>
                      <textarea onChange={(v) => setComment(v.target.value)} className='comInput' name="comment"/>
                    </div>
                  </div>
                </div>
                <div className="bottomField">
                  <div className="resultPrice">
                    <p>Итог:</p>
                    <p className="priseText">{res.slice(1).reduce((acc, a) => a.price * a.count + acc, 0)}$</p>
                  </div>
                  <input onClick={() => {
                    if (people && dest && time && res.length > 1)
                    setPrevOrder(false)
                  }} className='button' type="button" value='К оформлению'/>
                </div>
              </div>
              :
              <div className="confirmWindow">
                <div className="info">
                  <div className="drownContainer">
                    <p className='text'>Фамилия Имя:</p>
                    <p className='text'>№ телефона:</p>
                    <p className='text'>Адрес:</p>
                    <p className='text'>К-во чел:</p>
                    <p className='text'>К времени:</p>
                    <p className='text'>Заказ:</p>
                    <p className='text'>Коментарии к заказу:</p>
                    <p className='text'>Стоимость:</p>
                    <p className='text'>Способ оплаты:</p>
                  </div>
                  <div className="whiteContainer">
                    <p className="nameText">{localStorage.getItem('userSecondName')} {localStorage.getItem('userFirstName')}</p>
                    <p className="text">{localStorage.getItem('userPhone')}</p>
                    <p className="text">{dest}</p>
                    <p className="text">{people}</p>
                    <p className="text">к {time}</p>
                    <p className="text">{res.slice(1).map((el) => `${el.name} x${el.count}, `)}</p>
                    <p className="text">{comment ? comment : '-'}</p>
                    <p className="text">{res.slice(1).reduce((acc, a) => a.price * a.count + acc, 0)}$</p>
                    <div tabIndex={0}
                         onClick={() => {
                           setOpenSecond(!isOpenSecond)
                           setChanged(true);
                         }}
                         className='menuDrop'>
                      <p className={changed ? "textBox wh" : 'textBox'}>{PaymentValue}</p>
                      <img className={isOpenSecond ? "arrow-top" : "arrow"} src="/img/arrow-down-small.svg" alt="open"/>
                      {isOpenSecond &&
                        <div className='selector'>
                          <div onClick={() => setPaymentValue('картой курьеру')} className="option">
                            <p className='textPay'>картой курьеру</p>
                            <img className='line' src='/img/line-transparent.svg' alt='line'/>
                          </div>
                          <div onClick={() => setPaymentValue('наличными курьеру')} className="option">
                            <p className='textPay'>наличными курьеру</p>
                            <img className='line' src='/img/line-transparent.svg' alt='line'/>
                          </div>
                          <div onClick={() => setPaymentValue('картой онлайн')} className="option">
                            <p className='textPay'>картой онлайн</p>
                          </div>
                        </div>
                      }
                    </div>
                  </div>
                </div>
                <div className="buttons">
                  <input onClick={() => setPrevOrder(true)} className='buttCancel' type="button" value='Отменить'/>
                  <input onClick={() => {
                    sendOrder()
                  }} className='buttDeliver' type="button" value='Доставить'/>
                </div>
              </div>
            }
          </div>
          :
          <div className="cartEnd">
            <div className="firstText">Заказ оформлен успешно!</div>
            <p className="infoText">Дожидайтесь курьера к {time}</p>
            <input onClick={() => navigate('/')} className='button' type="button" value='На главную'/>
          </div>
        }


      </div>

    </div>
  );
};

export default Cart;
