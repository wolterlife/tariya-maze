import React, {useState} from 'react';
import './AdminMenu.scss'
import MenuSection from '../MenuSection/MenuSection';

const AdminMenu = () => {
  const [isShowMenu, setShowMenu] = useState(true)
  return (
    <>
      {isShowMenu ?
      <div className='adminMenu'>
        <div className="sectionAdd">
          <img onClick={()=>{setShowMenu(false)}} className='imgPlus' src="/img/icon-plus.svg" alt="plus"/>
          <p className='textAddMenu'>Добавить блюдо</p>
        </div>
        <MenuSection
          title='Горячие блюда'
          head={['Мясо', 'Птица', 'Морепродукты']}
          menuFirst={[
            {
              name: 'Жаркое',
              price: '20/40$',
              val: '250/500г',
              description: 'Готовится из части животного, которая запекается в духовом шкафу',
              imgLink: 'https://i.imgur.com/BkZT3MG.jpeg'
            },
            {
              name: 'Жаркое',
              price: '20/40$',
              val: '250/500г',
              description: 'Готовится из части животного, которая запекается в духовом шкафу',
              imgLink: 'https://i.imgur.com/Gnt4ngy.png'
            },
            {
              name: 'Жаркое',
              price: '20/40$',
              val: '250/500г',
              description: 'Готовится из части животного, которая запекается в духовом шкафу',
              imgLink: 'https://i.imgur.com/Gnt4ngy.png'
            },
            {
              name: 'Жаркое',
              price: '20/40$',
              val: '250/500г',
              description: 'Готовится из части животного, которая запекается в духовом шкафу',
              imgLink: 'https://i.imgur.com/Gnt4ngy.png'
            },
            {
              name: 'Жаркое',
              price: '20/40$',
              val: '250/500г',
              description: 'Готовится из части животного, которая запекается в духовом шкафу',
              imgLink: 'https://i.imgur.com/Gnt4ngy.png'
            },
            {
              name: 'Жаркое',
              price: '20/40$',
              val: '250/500г',
              description: 'Готовится из части животного, которая запекается в духовом шкафу',
              imgLink: 'https://i.imgur.com/Gnt4ngy.png'
            },
            {
              name: 'Жаркое',
              price: '20/40$',
              val: '250/500г',
              description: 'Готовится из части животного, которая запекается в духовом шкафу',
              imgLink: 'https://i.imgur.com/Gnt4ngy.png'
            },
            {
              name: 'Жаркое',
              price: '20/40$',
              val: '250/500г',
              description: 'Готовится из части животного, которая запекается в духовом шкафу',
              imgLink: 'https://i.imgur.com/Gnt4ngy.png'
            },
          ]}
          menuSecond={[
            {
              name: 'Жаркое',
              price: '20/40$',
              val: '250/500г',
              description: 'Готовится из части животного, которая запекается в духовом шкафу',
              imgLink: 'https://i.imgur.com/Gnt4ngy.png'
            },
            {
              name: 'Жаркое',
              price: '20/40$',
              val: '250/500г',
              description: 'Готовится из части животного, которая запекается в духовом шкафу',
              imgLink: 'https://i.imgur.com/Gnt4ngy.png'
            },
            {
              name: 'Жаркое',
              price: '20/40$',
              val: '250/500г',
              description: 'Готовится из части животного, которая запекается в духовом шкафу',
              imgLink: 'https://i.imgur.com/Gnt4ngy.png'
            },
          ]}
          menuThird={[
            {
              name: 'Жаркое',
              price: '20/40$',
              val: '250/500г',
              description: 'Готовится из части животного, которая запекается в духовом шкафу',
              imgLink: 'https://i.imgur.com/Gnt4ngy.png'
            },
            {
              name: 'Жаркое',
              price: '20/40$',
              val: '250/500г',
              description: 'Готовится из части животного, которая запекается в духовом шкафу',
              imgLink: 'https://i.imgur.com/Gnt4ngy.png'
            },
            {
              name: 'Жаркое',
              price: '20/40$',
              val: '250/500г',
              description: 'Готовится из части животного, которая запекается в духовом шкафу',
              imgLink: 'https://i.imgur.com/Gnt4ngy.png'
            },
            {
              name: 'Жаркое',
              price: '20/40$',
              val: '250/500г',
              description: 'Готовится из части животного, которая запекается в духовом шкафу',
              imgLink: 'https://i.imgur.com/Gnt4ngy.png'
            },
            {
              name: 'Жаркое',
              price: '20/40$',
              val: '250/500г',
              description: 'Готовится из части животного, которая запекается в духовом шкафу',
              imgLink: 'https://i.imgur.com/Gnt4ngy.png'
            },
            {
              name: 'Жаркое',
              price: '20/40$',
              val: '250/500г',
              description: 'Готовится из части животного, которая запекается в духовом шкафу',
              imgLink: 'https://i.imgur.com/Gnt4ngy.png'
            },
            {
              name: 'Жаркое',
              price: '20/40$',
              val: '250/500г',
              description: 'Готовится из части животного, которая запекается в духовом шкафу',
              imgLink: 'https://i.imgur.com/Gnt4ngy.png'
            },
            {
              name: 'Жаркое',
              price: '20/40$',
              val: '250/500г',
              description: 'Готовится из части животного, которая запекается в духовом шкафу',
              imgLink: 'https://i.imgur.com/Gnt4ngy.png'
            },
          ]}
          isAdmin
        />
        <MenuSection
          title='Десерты'
          head={['Выпечка', 'Мороженное', 'Фруктовое']}
        />
      </div>
      :
      <div className="addMenu">
        <img  onClick={()=>{setShowMenu(true)}} className='imgX' src="/img/x-mark.svg" alt="x"/>
        <div className="title">
          <p className="titleText">Горячие блюда</p>
          <p className="titleText">Закуски</p>
          <p className="titleText">Напитки</p>
          <p className="titleText">Десерты</p>
        </div>
        <div className="head">
          <p className="headText">Мясо</p>
          <p className="headText">Без мяса</p>
          <p className="headText">Морепродукты</p>
        </div>
        <div className="addPicture">
          <p>Изображение (URL):</p>
          <textarea className='imgLink' name="imgLink"  ></textarea>
        </div>
        <div className="name">
          <p>Название:</p>
          <textarea className='nameText' name="nameText"  ></textarea>
          <p className="textLimit">макс число символов: 40</p>
        </div>
        <div className="description">
          <p>Описание:</p>
          <textarea className='descriptionText' name="descriptionText"  ></textarea>
        </div>
        <div className="val">
          <p>Граммовка:</p>
          <textarea className='valText' name="valText"  ></textarea>
          <p className="textLimit">Запись в виде ХХХ/ХХХг</p>
        </div>
        <div className="price">
          <p>Цена:</p>
          <textarea className='priceText' name="priceText"  ></textarea>
          <p className="textLimit">Запись в виде ХХХ/ХХХ$</p>
        </div>
        <input className='button' type="button" value='Сохранить'/>
      </div>
    }
    </>


  );
};

export default AdminMenu;
