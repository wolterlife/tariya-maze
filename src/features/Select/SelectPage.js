import React from 'react';
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import ImgDelivery from "../../components/ImgDelivery/ImgDelivery";
import MenuSection from "../../components/MenuSection/MenuSection";
import SelectInfo from "../../components/SelectInfo/SelectInfo";

const SelectPage = () => {
  return (
    <>
      <NavBar/>
      <ImgDelivery button={false} />
      <SelectInfo advice={[
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
      ]} />
      <MenuSection
        title='Горячие блюда'
        head={['Мясо', 'Птица', 'Морепродукты']}
        menuFirst={[
          {
            name: 'Жаркое',
            price: '20/40$',
            val: '250/500г',
            description: 'Готовится из части животного, которая запекается в духовом шкафу',
            imgLink: 'https://i.imgur.com/BkZT3MG.jpeg',
            isDiscount: false,
          },
          {
            name: 'Жарк',
            price: '20/40$',
            val: '250/500г',
            description: 'Готовится из части животного, которая запекается в духовом шкафу',
            imgLink: 'https://i.imgur.com/Gnt4ngy.png',
            isDiscount: true,
          },
          {
            name: 'Жарк',
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
      />
      <MenuSection
        title='Десерты'
        head={['Выпечка', 'Мороженное', 'Фруктовое']}
      />
      <Footer/>
    </>
  );
};

export default SelectPage;