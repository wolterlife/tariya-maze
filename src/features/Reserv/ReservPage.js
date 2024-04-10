import React from 'react';
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import FormReservation from "../../components/FormReservation/FormReservation";

const ReservPage = () => {
  return (
    <>
      <NavBar/>
      <FormReservation />
      <Footer/>
    </>
  );
};

export default ReservPage;