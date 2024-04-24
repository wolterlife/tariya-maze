import React, {useState} from 'react';
import './Cart.scss'

import {dellFromCart, pushToCart} from "../../redux/commonSlice";

const Cart = () => {
  const [isPrevOrder, setPrevOrder] = useState(true) //todo: true
  const [isOpenSecond, setOpenSecond] = useState(false)
  const [changed, setChanged] = useState(false)
  const [PaymentValue, setPaymentValue] = useState('картой курьеру');
  const [isCartWindow, setCartWindow] = useState(true)


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
                    <div className={'card' ? 'card' : 'card  discount'}>
                      <img src={'https://i.imgur.com/BkZT3MG.jpeg'} alt="img"/>
                      <div className='textBlock'>
                        <div className="infoTextBlock">
                          <p className='name'>Жаркое</p>
                          <p className='description'>Готовится из части животного, которая запекается
                            в духовом шкафу</p>
                          <p className='val'>250г</p>
                        </div>
                        <div className='price'>20$</div>
                      </div>

                      <div className='buttons'>
                        <>
                          <img className='dell' src="/img/icon-minus.svg" alt="dell"/>
                          <p className='count'>{1}</p>
                        </>
                        <img className='add' src="/img/icon-plus.svg" alt="add"/>


                      </div>
                    </div>
                    <div className={'card' ? 'card' : 'card  discount'}>
                      <img src={'https://i.imgur.com/BkZT3MG.jpeg'} alt="img"/>
                      <div className='textBlock'>
                        <div className="infoTextBlock">
                          <p className='name'>Жаркое</p>
                          <p className='description'>Готовится из части животного, которая запекается
                            в духовом шкафу</p>
                          <p className='val'>250г</p>
                        </div>
                        <div className='price'>20$</div>
                      </div>

                      <div className='buttons'>
                        <>
                          <img className='dell' src="/img/icon-minus.svg" alt="dell"/>
                          <p className='count'>{1}</p>
                        </>
                        <img className='add' src="/img/icon-plus.svg" alt="add"/>


                      </div>
                    </div>
                    <div className={'card' ? 'card' : 'card  discount'}>
                      <img src={'https://i.imgur.com/BkZT3MG.jpeg'} alt="img"/>
                      <div className='textBlock'>
                        <div className="infoTextBlock">
                          <p className='name'>Жаркое</p>
                          <p className='description'>Готовится из части животного, которая запекается
                            в духовом шкафу</p>
                          <p className='val'>250г</p>
                        </div>
                        <div className='price'>20$</div>
                      </div>

                      <div className='buttons'>
                        <>
                          <img className='dell' src="/img/icon-minus.svg" alt="dell"/>
                          <p className='count'>{1}</p>
                        </>
                        <img className='add' src="/img/icon-plus.svg" alt="add"/>
                      </div>
                    </div>
                    <div className={'card' ? 'card' : 'card  discount'}>
                      <img src={'https://i.imgur.com/BkZT3MG.jpeg'} alt="img"/>
                      <div className='textBlock'>
                        <div className="infoTextBlock">
                          <p className='name'>Жаркое</p>
                          <p className='description'>Готовится из части животного, которая запекается
                            в духовом шкафу</p>
                          <p className='val'>250г</p>
                        </div>
                        <div className='price'>20$</div>
                      </div>
                      <div className='buttons'>
                        <>
                          <img className='dell' src="/img/icon-minus.svg" alt="dell"/>
                          <p className='count'>{1}</p>
                        </>
                        <img className='add' src="/img/icon-plus.svg" alt="add"/>
                      </div>
                    </div>
                    <div className={'card' ? 'card' : 'card  discount'}>
                      <img src={'https://i.imgur.com/BkZT3MG.jpeg'} alt="img"/>
                      <div className='textBlock'>
                        <div className="infoTextBlock">
                          <p className='name'>Жаркое</p>
                          <p className='description'>Готовится из части животного, которая запекается
                            в духовом шкафу</p>
                          <p className='val'>250г</p>
                        </div>
                        <div className='price'>20$</div>
                      </div>
                      <div className='buttons'>
                        <>
                          <img className='dell' src="/img/icon-minus.svg" alt="dell"/>
                          <p className='count'>{1}</p>
                        </>
                        <img className='add' src="/img/icon-plus.svg" alt="add"/>
                      </div>
                    </div>
                    <div className={'card' ? 'card' : 'card  discount'}>
                      <img src={'https://i.imgur.com/BkZT3MG.jpeg'} alt="img"/>
                      <div className='textBlock'>
                        <div className="infoTextBlock">
                          <p className='name'>Жаркое</p>
                          <p className='description'>Готовится из части животного, которая запекается
                            в духовом шкафу</p>
                          <p className='val'>250г</p>
                        </div>
                        <div className='price'>20$</div>
                      </div>

                      <div className='buttons'>
                        <>
                          <img className='dell' src="/img/icon-minus.svg" alt="dell"/>
                          <p className='count'>{1}</p>
                        </>
                        <img className='add' src="/img/icon-plus.svg" alt="add"/>
                      </div>
                    </div>
                  </div>
                  <div className="cartInfo">
                    <p className="nameText">Брагимец Арим</p>
                    <div className="info">
                      <img className='iconsLoc' src="/img/footer-location.svg" alt="location"/>
                      <div className="infoText">г. Гродно ул. Высокая д. 6</div>
                    </div>
                    <div className="info">
                      <img className='iconsUs' src="/img/reserv-ic2.svg" alt="location"/>
                      <div className="infoText">2</div>
                    </div>
                    <div className="info">
                      <img className='iconsTime' src="/img/reserv-ic3.svg" alt="location"/>
                      <div className="infoText">к 19:45</div>
                    </div>
                    <div className="comment">
                      <p className="commentsText">Коментарии к заказу:</p>
                      <textarea className='comInput' name="comment"/>
                    </div>
                  </div>
                </div>
                <div className="bottomField">
                  <div className="resultPrice">
                    <p>Итог:</p>
                    <p className="priseText">80$</p>
                  </div>
                  <input onClick={() => setPrevOrder(false)} className='button' type="button" value='К оформлению'/>
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
                    <p className="nameText">Брагимец Арим</p>
                    <p className="text">+375196584225</p>
                    <p className="text">г. Гродно ул. Высокая д. 6</p>
                    <p className="text">2</p>
                    <p className="text">к 19:45</p>
                    <p className="text">Жаркое, Жаркое, Жаркое, Жаркое</p>
                    <p className="text">-</p>
                    <p className="text">80 $</p>
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
                  <input onClick={() => setCartWindow(false)} className='buttDeliver' type="button" value='Доставить'/>
                </div>
              </div>
            }
          </div>
          :
          <div className="cartEnd">
            <div className="firstText">Заказ оформлен успешно!</div>
            <p className="infoText">Дожидайтесь курьера к 19:45</p>
            <input className='button' type="button" value='На главную'/>
          </div>
        }


      </div>

    </div>
  );
};

export default Cart;