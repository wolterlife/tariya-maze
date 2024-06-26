import React, {useState} from 'react';
import './MenuSection.scss'
import CardMenu from '../CardMenu/CardMenu';

const MenuSection = ({
                       title,
                       head = ['', '', ''],
                       menuFirst = [],
                       menuSecond = [],
                       menuThird = [],
                       getMenu,
                       isAdmin = false
                     }) => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [selectedHead, setSelectedHead] = useState(0)

  const resHead = head.map((el, index) =>
    <div key={index} className={(selectedHead === index) ? 'selected' : 'containerHead'}
         onClick={() => setSelectedHead(index)}>
      <p className='textHead'>{el}</p>
    </div>)


  const resMenuFirst = menuFirst.map((el, index) =>
    <CardMenu key={index} el={el} getMenu={getMenu} isAdmin={isAdmin}/>
  )

  const resMenuSecond = menuSecond.map((el, index) =>
    <CardMenu key={index} el={el} getMenu={getMenu} isAdmin={isAdmin}/>
  )

  const resMenuThird = menuThird.map((el, index) =>
    <CardMenu key={index} el={el} getMenu={getMenu} isAdmin={isAdmin}/>
  )

  return (
    <div className={(menuFirst.length || menuSecond.length || menuThird.length) ? `menu` : 'menuHide'}>
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
        : <img className='line' src="/img/menuLine.svg" alt="line"/>}
    </div>
  );
};

export default MenuSection;
