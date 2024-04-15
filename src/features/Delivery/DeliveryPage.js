import React from 'react';
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import ImgDelivery from "../../components/ImgDelivery/ImgDelivery";
import Advice from "../../components/Advice/Advice";

const DeliveryPage = () => {
  return (
    <>
      <NavBar />
      <ImgDelivery button={true} />
      <Advice advice={[
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
      <Footer />
    </>
  );
};

export default DeliveryPage;