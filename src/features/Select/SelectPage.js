import React, {useEffect, useState} from 'react';
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import ImgDelivery from "../../components/ImgDelivery/ImgDelivery";
import MenuSection from "../../components/MenuSection/MenuSection";
import SelectInfo from "../../components/SelectInfo/SelectInfo";
import {useDispatch, useSelector} from 'react-redux';
import {setSearch} from '../../redux/commonSlice';

const SelectPage = () => {
  const dispatch = useDispatch();
  const [menu, setMenu] = useState([])
  const {search} = useSelector(state => state.common)

  useEffect(() => {
    getMenu()
  }, [search]);

  useEffect(() => {
    dispatch(setSearch(''))
  }, [])

  const getMenu = () => {
    fetch("http://localhost:3000/menu/", {method: "GET"})
      .then((response) => response.json())
      .then((v) => {
        if (search) setMenu(v.filter((el) => el.name.toLowerCase().includes(search.toLowerCase())));
        else setMenu(v)
      })
      .catch((error) => console.log(error));
  }

  const converter = (type = '', by = '') => {
    return menu.filter((item) => item.itemAdd === by && item.type === type)
  }


  const resDeserts = () =>
    <MenuSection
      title='Десерты'
      head={['Выпечка', 'Мороженное', 'Фруктовое']}
      menuFirst={converter('Десерты', 'Выпечка')}
      menuSecond={converter('Десерты', 'Мороженное')}
      menuThird={converter('Десерты', 'Фруктовое')}
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

  const resHot = () =>
    <MenuSection
      title='Горячие блюда'
      head={['Мясо', 'Без мяса', 'Морепродукты']}
      menuFirst={converter('Горячие блюда', 'Мясо')}
      menuSecond={converter('Горячие блюда', 'Без мяса')}
      menuThird={converter('Горячие блюда', 'Морепродукты')}
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
      <ImgDelivery button={false} />
      <SelectInfo/>
      {resHot()}
      {resSnacks()}
      {resDrinks()}
      {resDeserts()}
      <Footer/>
    </>
  );
};

export default SelectPage;
