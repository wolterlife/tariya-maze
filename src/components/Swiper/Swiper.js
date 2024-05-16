import React, {useEffect, useState} from 'react';
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/react-flicking/dist/flicking-inline.css";
import './Swiper.scss'
import Flicking from "@egjs/react-flicking";

const Swiper = () => {
  const [apiDiscount, setApiDiscount] = useState([])

  useEffect(() => {
    getDiscountsFoo()
  }, []);


  function getDiscountsFoo() {
    fetch("http://localhost:3000/discounts/", {method: "GET"})
      .then((response) => response.json())
      .then((data) => {
        setApiDiscount(data.concat(data));
      })
      .catch((error) => console.log(error));
  }

  const res = apiDiscount.map((el, index) =>
      <div className={`panel ${index}`} key={Math.random()}>
        <p className='textCard'>{el.name}</p>
        <p className='textLower'>{el.description}</p>
      </div>)
  return (
    <div className="container">
      <img className='imgBackground' src="/img/reviewsBackground.svg" alt=""/>
      <div className='swiper'>
        <Flicking
          renderOnlyVisible={true}
          align={"center"}
          defaultIndex={3}
          circular={true}
          panelsPerView={3}
          duration={200}
        >
          {res}
        </Flicking>
      </div>
    </div>

  );
};

export default Swiper;
