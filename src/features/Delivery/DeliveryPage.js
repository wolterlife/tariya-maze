import React, {useEffect, useState} from 'react';
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import ImgDelivery from "../../components/ImgDelivery/ImgDelivery";
import Advice from "../../components/Advice/Advice";

const DeliveryPage = () => {
  const [menu, setMenu] = useState([])

  useEffect(() => {
    getMenu()
  }, []);

  const getMenu = () => {
    fetch("http://localhost:3000/menu/", {method: "GET"})
      .then((response) => response.json())
      .then((v) => {
        setMenu(v)
      })
      .catch((error) => console.log(error));
  }

  function randomitems(arr, returnedCount){
    if ((Date.now() - +localStorage.getItem('randomAdviseTime') < 86400000) && JSON.parse(localStorage.getItem('randomAdvise')).length) {
      return JSON.parse(localStorage.getItem('randomAdvise'))
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

  return (
    <>
      <NavBar />
      <ImgDelivery button={true} />
      <Advice advice={randomitems(menu, 8)} />
      <Footer />
    </>
  );
};

export default DeliveryPage;
