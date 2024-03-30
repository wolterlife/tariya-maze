import React from 'react';
import './NavBar.scss'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setPopUpProfileVisible} from "../../redux/commonSlice";


const NavBar = () => {
  const {isAuth} = useSelector(state => state.common)
  const dispatch = useDispatch()
  return (
    <div className='containerNav'>
      <div className='navbar'>
        <div className='content'>
          <Link to='/news' className='text'>Новости</Link>
          <Link to='/menu' className='text'>Меню</Link>
          <Link to='/' className='text'>
            <img src='/img/logo.svg' alt='logo'/>
          </Link>
          <Link to='/discounts' className='text'>Акции</Link>
          {isAuth ?
            <Link to='/profile' className='text'>Профиль</Link> :
            <button onClick={() => dispatch(setPopUpProfileVisible(true))} className='text'>Профиль</button>
          }
        </div>
      </div>
      <hr color='#AC9168' className='line'/>
    </div>
  );
};

export default NavBar;