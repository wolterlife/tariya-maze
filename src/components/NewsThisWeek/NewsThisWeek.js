import React from 'react';
import './NewsThisWeek.scss'

const NewsThisWeek = () => {
  return (
    <div className='newsWeek'>
      <p className='textLarge'>Текущая неделя</p>
      <div className="cardsWeek">
        <img className='imgLeft' src="/img/news-left.svg" alt="image"/>
        <img className='imgRight' src="/img/news-right.svg" alt="image"/>
        <div className="topLine">
          <div className="card">
            <p className='textTopCard'>Новое меню</p>
            <div className="content">
              <p className='textMain'>Мы добавили несколько новых блюд</p>
              <div className="lowerSection">
                <p className='textPrimary'>(Сливочный ризотто с лососем и шпинатом)</p>
                <p className='textPrimary'>(Сливочный ризотто с лососем и шпинатом)</p>
                <p className='textPrimary'>(Сливочный ризотто с лососем и шпинатом)</p>
              </div>
            </div>
          </div>
          <div className="card">
            <p className='textTopCard'>История успеха </p>
            <div className="content">
              <p className='textMain'>Наш главный повар поделился секретами своих лучших блюд</p>
              <div className="lowerSection">
                <p className='textPrimary'>(Темпура из цветной капусты с апельсиновым соусом)</p>
                <p className='textPrimary'>(Греческий салат с жареными кальмарами и лимонным соусом)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapperBottom">
          <div className="bottomLine">
            <div className="card">
              <p className='textTopCard'>Эксклюзивное событие</p>
              <div className="content">
                <p className='textMain'>Вечер испанской кухни в нашем ресторане</p>
                <div className="lowerSection">
                  <p className='textPrimary'>(Темпура из цветной капусты с апельсиновым соусом)</p>
                  <p className='textPrimary'>(Греческий салат с жареными кальмарами и лимонным соусом)</p>
                </div>
              </div>
            </div>
            <div className="card">
              <p className='textTopCard'>Награды</p>
              <div className="content">
                <p className='textMain'>Наш ресторан отмечен престижной наградой 'Лучшее кулинарное заведение 2023'</p>
                <div className="lowerSection">
                  <p className='textPrimary'>(Греческий салат с жареными кальмарами и лимонным соусом)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default NewsThisWeek;