import '../../normalize.css';
import ImgMenuPrevius from "../../components/ImgMenuPrevius/ImgMenuPrevius";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import MenuSection from "../../components/MenuSection/MenuSection";

function MenuPage() {
  return (
    <>
      <NavBar/>
      <ImgMenuPrevius/>
      <MenuSection
        title='Горячие блюда'
        head={['Мясо', 'Птица', 'Морепродукты']}
        menuFirst={[
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
}

export default MenuPage;
