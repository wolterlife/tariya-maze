import React, {useState} from 'react';
import './MenuSection.scss'

const MenuSection = ({title, head = ['', '', ''], menuFirst = [], menuSecond = [], menuThird = []}) => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [selectedHead, setSelectedHead] = useState(0)

  const resHead = head.map((el, index) =>
    <div key={index} className={(selectedHead === index) ? 'selected' : 'containerHead'} onClick={() => setSelectedHead(index)}>
      <p className='textHead'>{el}</p>
    </div>)

  const resMenuFirst = menuFirst.map((el, index) =>
  <div key={index} className='card'>
    <img src="https://i.imgur.com/Gnt4ngy.png" alt="img"/>
    <div className='textBlock'>
      <p className='name'>{el.name}</p>
      <p className='description'>{el.description}</p>
      <div className='low'>
        <p className='price'>{el.price}</p>
        <p className='val'>{el.val}</p>
      </div>
    </div>
  </div>)

  const resMenuSecond = menuSecond.map((el, index) =>
    <div key={index} className='card'>
      <img src="https://i.imgur.com/Gnt4ngy.png" alt="img"/>
      <div className='textBlock'>
        <p className='name'>{el.name}</p>
        <p className='description'>{el.description}</p>
        <div className='low'>
          <p className='price'>{el.price}</p>
          <p className='val'>{el.val}</p>
        </div>
      </div>
    </div>)

  const resMenuThird = menuThird.map((el, index) =>
    <div key={index} className='card'>
      <img src="https://i.imgur.com/Gnt4ngy.png" alt="img"/>
      <div className='textBlock'>
        <p className='name'>{el.name}</p>
        <p className='description'>{el.description}</p>
        <div className='low'>
          <p className='price'>{el.price}</p>
          <p className='val'>{el.val}</p>
        </div>
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