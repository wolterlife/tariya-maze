import React, {useEffect, useState} from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import UserProfile from '../../components/UserProfile/UserProfile';
import {useNavigate} from 'react-router-dom';

const ProfilePage = () => {
  const navigate = useNavigate()
  const [apiOrders, setApiOrders] = useState([])
  const [apiOrderMenu, setApiOrderMenu] = useState([])
  const [apiReservations, setApiReservations] = useState([])

  useEffect(() => { // Проверка безопасности
    fetch(`http://localhost:3000/auth/${localStorage.getItem('userId')}`, {method: "GET"})
      .then((response) => response.json())
      .then((data) => {
        if (data) navigate('/admin')
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => { // Получение заказов и orderMenu
    fetch(`http://localhost:3000/orders/${localStorage.getItem('userId')}`, {method: "GET", headers: {
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
      }})
      .then((response) => response.json())
      .then((data) => {
        setApiOrders(data)
      })
      .catch((error) => console.log(error));

    fetch("http://localhost:3000/orders_menu/", {method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setApiOrderMenu(data)
      })
      .catch((error) => console.log(error));
  }, [])

  useEffect(() => { // Получение брони
    fetch(`http://localhost:3000/reservations/${localStorage.getItem('userId')}`, {method: "GET", headers: {
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
      }})
      .then((response) => response.json())
      .then((data) => {
        setApiReservations(data)
      })
      .catch((error) => console.log(error));
  }, []);




  return (
    <>
      <NavBar/>
      <UserProfile orders={apiOrders} reservations={apiReservations} ordMenu={apiOrderMenu}/>
      <Footer/>
    </>
  );
};

export default ProfilePage;
