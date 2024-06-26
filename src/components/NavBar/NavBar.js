import React from 'react';
import './NavBar.scss'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setPopUpProfileVisible} from "../../redux/commonSlice";
import PopUpProfile from '../PopUpProfile/PopUpProfile';


const NavBar = () => {
  const dispatch = useDispatch()
  const {isPopUpProfileVisible, cart} = useSelector(state => state.common)
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
          {(localStorage.getItem('userId') !== null) ?
            <>
              <Link to='/profile' className='text'>Профиль</Link>
              <div>

              <Link to='/cart'><img className='cartImg' src="/img/cart-icon.svg" alt=""/></Link>
              <p className='cartCount'>{cart.length - 1}</p>
              </div>
            </>
            :
            <button onClick={() => dispatch(setPopUpProfileVisible(true))} className='text'>Профиль</button>
          }
        </div>
      </div>
      <hr color='#AC9168' className='line'/>
      {isPopUpProfileVisible && <PopUpProfile/>}
    </div>
  );
};

export default NavBar;
