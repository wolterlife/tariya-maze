import '../../normalize.css';
import ImgMenuPrevius from "../../components/ImgMenuPrevius/ImgMenuPrevius";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import MenuSection from "../../components/MenuSection/MenuSection";
import React, {useEffect, useState} from 'react';

function MenuPage() {
  const [menu, setMenu] = useState([])
  const converter = (type = '', by = '') => {
    return menu.filter((item) => item.itemAdd === by && item.type === type)
  }

  const getMenu = () => {
    fetch("http://localhost:3000/menu/", {method: "GET"})
      .then((response) => response.json())
      .then((data) => {
        setMenu(data);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getMenu()
  }, []);


  const resDeserts = () =>
    <MenuSection
      title='Десерты'
      head={['Выпечка', 'Мороженное', 'Фруктовое']}
      menuFirst={converter('Десерты', 'Выпечка')}
      menuSecond={converter('Десерты', 'Мороженное')}
      menuThird={converter('Десерты', 'Фруктовое')}
      getMenu={getMenu}
    />

  const resHot = () =>
    <MenuSection
      title='Горячие блюда'
      head={['Мясо', 'Без мяса', 'Морепродукты']}
      menuFirst={converter('Горячие блюда', 'Мясо')}
      menuSecond={converter('Горячие блюда', 'Без мяса')}
      menuThird={converter('Горячие блюда', 'Морепродукты')}
      getMenu={getMenu}
    />


  const resSnacks = () =>
    <MenuSection
      title='Закуски'
      head={['Мясо', 'Без мяса', 'Морепродукты']}
      menuFirst={converter('Закуски', 'Мясо')}
      menuSecond={converter('Закуски', 'Без мяса')}
      menuThird={converter('Закуски', 'Морепродукты')}
      getMenu={getMenu}
    />

  const resDrinks = () =>
    <MenuSection
      title='Напитки'
      head={['Горячие', 'Коктели', 'Лимонады']}
      menuFirst={converter('Напитки', 'Горячие')}
      menuSecond={converter('Напитки', 'Коктели')}
      menuThird={converter('Напитки', 'Лимонады')}
      getMenu={getMenu}
    />

  return (
    <>
      <NavBar/>
      <ImgMenuPrevius/>
      {resHot()}
      {resSnacks()}
      {resDrinks()}
      {resDeserts()}
      <Footer/>
    </>
  );
}

export default MenuPage;
