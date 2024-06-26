import React, {useEffect, useRef, useState} from 'react';
import './Reviews.scss'
import debounce from "lodash.debounce";

const Reviews = () => {
  const cardsRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [reviews, setReviews] = useState([])


  const checkForScrollPosition = () => {
    const {current} = cardsRef;
    setTimeout(() => {
      if (current) {
        const {scrollLeft, scrollWidth, clientWidth} = current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(Math.abs (scrollLeft - (scrollWidth - clientWidth)) > 1);
      }
    }, 400)
  };

  const debounceCheckForScrollPosition = debounce(checkForScrollPosition, 200);

  const scrollContainerBy = (distance) =>
    cardsRef.current?.scrollBy({left: distance, behavior: "smooth"});



  useEffect(() => {
    fetch("http://localhost:3000/reviews/", {method: "GET"})
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
      })
      .catch((error) => console.log(error));

    const {current} = cardsRef;
    checkForScrollPosition();
    current?.addEventListener("scroll", debounceCheckForScrollPosition);

    return () => {
      current?.removeEventListener("scroll", debounceCheckForScrollPosition);
      debounceCheckForScrollPosition.cancel();
    };
  }, []);



  const res = reviews.map(el =>
    <div key={el.id} className="card">
      <div className="top">
        <p className='name'>
          {el.user}:
        </p>
        <div className='stars'>
          {el.stars >= 1 ?
            <img className='star' src="/img/star-true.svg" alt="star"/> :
            <img className='star' src="/img/star-false.svg" alt="star"/>
          }
          {el.stars >= 2 ?
            <img className='star' src="/img/star-true.svg" alt="star"/> :
            <img className='star' src="/img/star-false.svg" alt="star"/>
          }
          {el.stars >= 3 ?
            <img className='star' src="/img/star-true.svg" alt="star"/> :
            <img className='star' src="/img/star-false.svg" alt="star"/>
          }
          {el.stars >= 4 ?
            <img className='star' src="/img/star-true.svg" alt="star"/> :
            <img className='star' src="/img/star-false.svg" alt="star"/>
          }
          {el.stars >= 5 ?
            <img className='star' src="/img/star-true.svg" alt="star"/> :
            <img className='star' src="/img/star-false.svg" alt="star"/>
          }
        </div>
      </div>
      <p className='text'>{el.text}</p>
    </div>
  )

  return (
    <div className="reviews">
      <input onClick={() => scrollContainerBy(-400)} type='image' className={canScrollLeft ? 'button' : 'hidden'} src="/img/left-arrow.svg" alt="left"/>
      <div ref={cardsRef} className='containerReviews'>
        <div className="cards">
          {res}
          {res}
        </div>

      </div>
      <input onClick={() => scrollContainerBy(400)} type='image' className={canScrollRight ? 'button' : 'hidden'} src="/img/right-arrow.svg"
             alt="right"/>
    </div>
  );
};

export default Reviews;
