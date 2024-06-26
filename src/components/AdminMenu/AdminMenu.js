import React, {useEffect, useState} from 'react';
import './AdminMenu.scss'
import MenuSection from '../MenuSection/MenuSection';
import {clearCart} from '../../redux/commonSlice';
import {useDispatch} from 'react-redux';

const AdminMenu = () => {
  const dispatch = useDispatch()
  const [isShowMenu, setShowMenu] = useState(true)
  const [menu, setMenu] = useState([])
  const [selectedItem, setSelect] = useState("")
  const [itemAdd, setAdd] = useState("")
  const [valueURL, setValueURL] = useState('')
  const [valueName, setValueName] = useState('')
  const [valueDescription, setValueDescription] = useState('')
  const [valueGR, setValueGR] = useState('')
  const [valuePrice, setValuePrice] = useState('')

  const saveFoo = () => {
    if (valueURL && valueName && valueDescription && valueGR && valuePrice && selectedItem && itemAdd)
    fetch(`http://localhost:3000/menu/`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
      },
      body: JSON.stringify({
        name: valueName,
        description: valueDescription,
        val: valueGR,
        imgLink: valueURL,
        price: valuePrice,
        itemAdd: itemAdd,
        type: selectedItem
      })
    })
      .then((response) => response.status)
      .then(() => {
        setShowMenu(true)
        getMenu();
      })
      .catch((error) => console.log(error));
  }

  const getMenu = () => {
    fetch("http://localhost:3000/menu/", {method: "GET"})
      .then((response) => response.json())
      .then((data) => {
        setMenu(data);
      })
      .catch((error) => console.log(error));
  }

  const converter = (type = '', by = '') => {
    return menu.filter((item) => item.itemAdd === by && item.type === type)
  }

  useEffect(() => {
    getMenu()
    dispatch(clearCart())
  }, []);

  useEffect(() => {
    setAdd('')
  }, [selectedItem]);


  const resHot = () =>
    <MenuSection
      title='Горячие блюда'
      head={['Мясо', 'Без мяса', 'Морепродукты']}
      menuFirst={converter('Горячие блюда', 'Мясо')}
      menuSecond={converter('Горячие блюда', 'Без мяса')}
      menuThird={converter('Горячие блюда', 'Морепродукты')}
      getMenu={getMenu}
      isAdmin
    />

  const resDeserts = () =>
    <MenuSection
      title='Десерты'
      head={['Выпечка', 'Мороженное', 'Фруктовое']}
      menuFirst={converter('Десерты', 'Выпечка')}
      menuSecond={converter('Десерты', 'Мороженное')}
      menuThird={converter('Десерты', 'Фруктовое')}
      getMenu={getMenu}
      isAdmin
    />

  const resSnacks = () =>
    <MenuSection
      title='Закуски'
      head={['Мясо', 'Без мяса', 'Морепродукты']}
      menuFirst={converter('Закуски', 'Мясо')}
      menuSecond={converter('Закуски', 'Без мяса')}
      menuThird={converter('Закуски', 'Морепродукты')}
      getMenu={getMenu}
      isAdmin
    />

  const resDrinks = () =>
    <MenuSection
      title='Напитки'
      head={['Горячие', 'Коктели', 'Лимонады']}
      menuFirst={converter('Напитки', 'Горячие')}
      menuSecond={converter('Напитки', 'Коктели')}
      menuThird={converter('Напитки', 'Лимонады')}
      getMenu={getMenu}
      isAdmin
    />

  return (
    <>
      {isShowMenu ?
      <div className='adminMenu'>
        <div className="sectionAdd">
          <img onClick={()=>{setShowMenu(false)}} className='imgPlus' src="/img/icon-plus.svg" alt="plus"/>
          <p className='textAddMenu'>Добавить блюдо</p>
        </div>
        {resHot()}
        {resSnacks()}
        {resDrinks()}
        {resDeserts()}
      </div>
      :
      <div className="addMenu">
        <img  onClick={()=>{setShowMenu(true)}} className='imgX' src="/img/x-mark.svg" alt="x"/>
        <div className="title">
          <p onClick={(e) => setSelect(e.target.innerText)} className={selectedItem === 'Горячие блюда' ? 'titleText selected' : 'titleText'}>Горячие блюда</p>
          <p onClick={(e) => setSelect(e.target.innerText)} className={selectedItem === 'Закуски' ? 'titleText selected' : 'titleText'}>Закуски</p>
          <p onClick={(e) => setSelect(e.target.innerText)} className={selectedItem === 'Напитки' ? 'titleText selected' : 'titleText'}>Напитки</p>
          <p onClick={(e) => setSelect(e.target.innerText)} className={selectedItem === 'Десерты' ? 'titleText selected' : 'titleText'}>Десерты</p>
        </div>
        <div className="head">
          {selectedItem === 'Горячие блюда' &&
            <>
              <p onClick={(e) => setAdd(e.target.innerText)} className={itemAdd === "Мясо" ? 'headText selectAdd' : 'headText'}>Мясо</p>
              <p onClick={(e) => setAdd(e.target.innerText)} className={itemAdd === "Без мяса" ? 'headText selectAdd' : 'headText'}>Без мяса</p>
              <p onClick={(e) => setAdd(e.target.innerText)} className={itemAdd === "Морепродукты" ? 'headText selectAdd' : 'headText'}>Морепродукты</p>
            </>
          }
          {selectedItem === 'Закуски' &&
            <>
              <p onClick={(e) => setAdd(e.target.innerText)} className={itemAdd === "Мясо" ? 'headText selectAdd' : 'headText'}>Мясо</p>
              <p onClick={(e) => setAdd(e.target.innerText)} className={itemAdd === "Без мяса" ? 'headText selectAdd' : 'headText'}>Без мяса</p>
              <p onClick={(e) => setAdd(e.target.innerText)} className={itemAdd === "Морепродукты" ? 'headText selectAdd' : 'headText'}>Морепродукты</p>
            </>
          }
          {selectedItem === 'Напитки' &&
            <>
              <p onClick={(e) => setAdd(e.target.innerText)} className={itemAdd === "Горячие" ? 'headText selectAdd' : 'headText'}>Горячие</p>
              <p onClick={(e) => setAdd(e.target.innerText)} className={itemAdd === "Коктели" ? 'headText selectAdd' : 'headText'}>Коктели</p>
              <p onClick={(e) => setAdd(e.target.innerText)} className={itemAdd === "Лимонады" ? 'headText selectAdd' : 'headText'}>Лимонады</p>
            </>
          }
          {selectedItem === 'Десерты' &&
            <>
              <p onClick={(e) => setAdd(e.target.innerText)} className={itemAdd === "Выпечка" ? 'headText selectAdd' : 'headText'}>Выпечка</p>
              <p onClick={(e) => setAdd(e.target.innerText)} className={itemAdd === "Мороженное" ? 'headText selectAdd' : 'headText'}>Мороженное</p>
              <p onClick={(e) => setAdd(e.target.innerText)} className={itemAdd === "Фруктовое" ? 'headText selectAdd' : 'headText'}>Фруктовое</p>
            </>
          }
        </div>
        <div className="addPicture">
          <p>Изображение (URL):</p>
          <textarea onChange={(e) => setValueURL(e.target.value)} className='imgLink' name="imgLink"></textarea>
        </div>
        <div className="name">
          <p>Название:</p>
          <textarea onChange={(e) => setValueName(e.target.value)} className='nameText' name="nameText"></textarea>
          <p className="textLimit">макс число символов: 40</p>
        </div>
        <div className="description">
          <p>Описание:</p>
          <textarea onChange={(e) => setValueDescription(e.target.value)} className='descriptionText' name="descriptionText"></textarea>
        </div>
        <div className="val">
          <p>Граммовка:</p>
          <textarea onChange={(e) => setValueGR(e.target.value)} className='valText' name="valText"  ></textarea>
          <p className="textLimit">Запись в виде ХХХг</p>
        </div>
        <div className="price">
          <p>Цена:</p>
          <textarea onChange={(e) => setValuePrice(e.target.value)} className='priceText' name="priceText"  ></textarea>
          <p className="textLimit">Запись в виде ХХХ</p>
        </div>
        <input onClick={saveFoo} className='button' type="button" value='Сохранить'/>
      </div>
    }
    </>
  );
};

export default AdminMenu;
