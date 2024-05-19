import React, {useEffect} from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import AdminHead from '../../components/AdminHead/AdminHead';
import {useNavigate} from 'react-router-dom';

const AdminPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('userId') === null) navigate('/')
    fetch(`http://localhost:3000/auth/${localStorage.getItem('userId')}`, {method: "GET"})
      .then((response) => response.json())
      .then((data) => {
        if (!data) navigate('/')
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <NavBar/>
      <AdminHead/>
      <Footer/>
    </>
  );
};

export default AdminPage;
