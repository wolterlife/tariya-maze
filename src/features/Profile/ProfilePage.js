import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import UserProfile from '../../components/UserProfile/UserProfile';

const ProfilePage = () => {
  return (
    <>
      <NavBar/>
      <UserProfile orders={[
        {
          id: 0,
          title: 'Жаркое, жаркое, жаркое',
          price: 242,
          isActive: true,
          date: '1 апреля 19:45'
        },
        {
          id: 1,
          title: 'Лала, жаркое, жаркое',
          price: 242,
          isActive: false,
          date: '1 апреля 19:45'
        },
        {
          id: 2,
          title: 'Жаркое, жаркое, жаркое',
          price: 242,
          isActive: true,
          date: '1 апреля 19:45'
        },
        {
          id: 3,
          title: 'Жаркое, жаркое, жаркое',
          price: 242,
          isActive: false,
          date: '1 апреля 19:45'
        },

      ]} reservations={[
        {
          id: 0,
          count: 1,
          date: '15 марта',
          time: '20:00',
          isActive: false,
        },
        {
          id: 1,
          count: 2,
          date: '13 марта',
          time: '20:00',
          isActive: false,
        },
        {
          id: 2,
          count: 5,
          date: '20 марта',
          time: '21:00',
          isActive: true,
        },
      ]}/>
      <Footer/>
    </>
  );
};

export default ProfilePage;
