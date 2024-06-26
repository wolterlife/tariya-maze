import React, {useEffect, useState} from 'react';
import './SelectInfo.scss'
import {useDispatch} from 'react-redux';
import {setSearch} from '../../redux/commonSlice';

const SelectInfo = () => {
  const dispatch = useDispatch();
  const [menu, setMenu] = useState([])

  const getMenu = () => {
    fetch("http://localhost:3000/menu/", {method: "GET"})
      .then((response) => response.json())
      .then((v) => {
        setMenu(v)
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getMenu()
  }, []);

  function randomitems(arr, returnedCount){
    if ((Date.now() - +localStorage.getItem('randomAdviseTime') < 86400000) && JSON.parse(localStorage.getItem('randomAdvise')).length) {
      return JSON.parse(localStorage.getItem('randomAdvise')).slice(0, 6)
    } else {
      function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
      }
      const clonedData = arr.slice()
      shuffle(clonedData)
      if ( returnedCount === undefined) return clonedData;
      localStorage.setItem('randomAdvise', JSON.stringify(clonedData.slice(-1 * returnedCount)))
      localStorage.setItem('randomAdviseTime', JSON.stringify(Date.now()))
      return clonedData.slice(-1 * returnedCount)
    }
  }

  const res = randomitems(menu, 8).map((el) => {
    return (
      <div key={el.id} className="card">
        <img className='img' src={el.imgLink} alt="img"/>
        <p className='text'>{el.name}</p>
      </div>
    )
  })

  return (
    <div className='select'>
      <p className='text'>Мы советуем</p>
      <div className='advice'>
        {res}
      </div>
      <p className='text'>Меню</p>
      <p className='textSmall'>Уважаемые посетители, вынуждены вас проинформировать, <br/> что не на все блюда возможно доставка</p>
      <p className='textBeige'>При наличии, акционные блюда будут выделены в меню</p>
      <input
        onChange={(e) => dispatch(setSearch(e.target.value))}
        className='search'
        type="text"
        placeholder="Найти блюдо"
      />
    </div>
  );
};

export default SelectInfo;
