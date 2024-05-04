import React, {useState} from 'react';
import './AdminMenu.scss'
import MenuSection from '../MenuSection/MenuSection';

const AdminMenu = () => {
  const [isShowMenu, setShowMenu] = useState()
  return (
    <div className='adminMenu'>
      <div className="sectionAdd">
        <img onClick={()=>{}} className='imgPlus' src="/img/icon-plus.svg" alt="plus"/>
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
  );
};

export default AdminMenu;
