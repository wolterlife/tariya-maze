import React, {useEffect, useRef, useState} from 'react';
import './Reviews.scss'
import debounce from "lodash.debounce";

const Reviews = () => {
  const cardsRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkForScrollPosition = () => {
    const {current} = cardsRef;
    if (current) {
      const {scrollLeft, scrollWidth, clientWidth} = current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft !== scrollWidth - clientWidth);
    }
  };

  const debounceCheckForScrollPosition = debounce(checkForScrollPosition, 200);

  const scrollContainerBy = (distance) =>
    cardsRef.current?.scrollBy({left: distance, behavior: "smooth"});

  useEffect(() => {
    const {current} = cardsRef;
    checkForScrollPosition();
    current?.addEventListener("scroll", debounceCheckForScrollPosition);

    return () => {
      current?.removeEventListener("scroll", debounceCheckForScrollPosition);
      debounceCheckForScrollPosition.cancel();
    };
  }, []);

  return (
    <div className="reviews">
      <input onClick={() => scrollContainerBy(-400)} type='image' className={canScrollLeft ? 'button' : 'hidden'} src="/img/left-arrow.svg" alt="left"/>
      <div ref={cardsRef} className='containerReviews'>
        <div className="cards">
          <div className="card">
            <div className="top">
              <p className='name'>
                Алиса:
              </p>
              <div className='stars'>
                <img className='star' src="/img/star-true.svg" alt="star"/>
                <img className='star' src="/img/star-true.svg" alt="star"/>
                <img className='star' src="/img/star-true.svg" alt="star"/>
                <img className='star' src="/img/star-true.svg" alt="star"/>
                <img className='star' src="/img/star-false.svg" alt="star"/>
              </div>
            </div>
            <p className='text'>Были в этом ресторане на день рождения и просто восторг! Атмосфера, обслуживание ...</p>
          </div>
          <div className="card">
            <div className="top">
              <p className='name'>
                Алиса:
              </p>
              <div className='stars'>
                <img className='star' src="/img/star-true.svg" alt="star"/>
                <img className='star' src="/img/star-true.svg" alt="star"/>
                <img className='star' src="/img/star-true.svg" alt="star"/>
                <img className='star' src="/img/star-true.svg" alt="star"/>
                <img className='star' src="/img/star-false.svg" alt="star"/>
              </div>
            </div>
            <p className='text'>Были в этом ресторане на день рождения и просто восторг! Атмосфера, обслуживание ...</p>
          </div>
          <div className="card">
            <div className="top">
              <p className='name'>
                Алиса:
              </p>
              <div className='stars'>
                <img className='star' src="/img/star-true.svg" alt="star"/>
                <img className='star' src="/img/star-true.svg" alt="star"/>
                <img className='star' src="/img/star-true.svg" alt="star"/>
                <img className='star' src="/img/star-true.svg" alt="star"/>
                <img className='star' src="/img/star-false.svg" alt="star"/>
              </div>
            </div>
            <p className='text'>Были в этом ресторане на день рождения и просто восторг! Атмосфера, обслуживание ...</p>
          </div>
          <div className="card">
            <div className="top">
              <p className='name'>
                Алиса:
              </p>
              <div className='stars'>
                <img className='star' src="/img/star-true.svg" alt="star"/>
                <img className='star' src="/img/star-true.svg" alt="star"/>
                <img className='star' src="/img/star-true.svg" alt="star"/>
                <img className='star' src="/img/star-true.svg" alt="star"/>
                <img className='star' src="/img/star-false.svg" alt="star"/>
              </div>
            </div>
            <p className='text'>Были в этом ресторане на день рождения и просто восторг! Атмосфера, обслуживание ...</p>
          </div>
          <div className="card">
            <div className="top">
              <p className='name'>
                Алиса:
              </p>
              <div className='stars'>
                <img className='star' src="/img/star-true.svg" alt="star"/>
                <img className='star' src="/img/star-true.svg" alt="star"/>
                <img className='star' src="/img/star-true.svg" alt="star"/>
                <img className='star' src="/img/star-true.svg" alt="star"/>
                <img className='star' src="/img/star-false.svg" alt="star"/>
              </div>
            </div>
            <p className='text'>Были в этом ресторане на день рождения и просто восторг! Атмосфера, обслуживание ...</p>
          </div>
          <div className="card">
            <div className="top">
              <p className='name'>
                Алиса:
              </p>
              <div className='stars'>
                <img className='star' src="/img/star-true.svg" alt="star"/>
                <img className='star' src="/img/star-true.svg" alt="star"/>
                <img className='star' src="/img/star-true.svg" alt="star"/>
                <img className='star' src="/img/star-true.svg" alt="star"/>
                <img className='star' src="/img/star-false.svg" alt="star"/>
              </div>
            </div>
            <p className='text'>Были в этом ресторане на день рождения и просто восторг! Атмосфера, обслуживание ...</p>
          </div>
          <div className="card">
            <div className="top">
              <p className='name'>
                Алиса:
              </p>
              <div className='stars'>
                <img className='star' src="/img/star-true.svg" alt="star"/>
                <img className='star' src="/img/star-true.svg" alt="star"/>
                <img className='star' src="/img/star-true.svg" alt="star"/>
                <img className='star' src="/img/star-true.svg" alt="star"/>
                <img className='star' src="/img/star-false.svg" alt="star"/>
              </div>
            </div>
            <p className='text'>Были в этом ресторане на день рождения и просто восторг! Атмосфера, обслуживание ...</p>
          </div>
          <div className="card">
            <div className="top">
              <p className='name'>
                Алиса:
              </p>
              <div className='stars'>
                <img className='star' src="/img/star-true.svg" alt="star"/>
                <img className='star' src="/img/star-true.svg" alt="star"/>
                <img className='star' src="/img/star-true.svg" alt="star"/>
                <img className='star' src="/img/star-true.svg" alt="star"/>
                <img className='star' src="/img/star-false.svg" alt="star"/>
              </div>
            </div>
            <p className='text'>Были в этом ресторане на день рождения и просто восторг! Атмосфера, обслуживание ...</p>
          </div>
          <div className="card">
            <div className="top">
              <p className='name'>
                Алиса:
              </p>
              <div className='stars'>
                <img className='star' src="/img/star-true.svg" alt="star"/>
                <img className='star' src="/img/star-true.svg" alt="star"/>
                <img className='star' src="/img/star-true.svg" alt="star"/>
                <img className='star' src="/img/star-true.svg" alt="star"/>
                <img className='star' src="/img/star-false.svg" alt="star"/>
              </div>
            </div>
            <p className='text'>Были в этом ресторане на день рождения и просто восторг! Атмосфера, обслуживание ...</p>
          </div>
          <div className="card">
            <div className="top">
              <p className='name'>
                Алиса:
              </p>
              <div className='stars'>
                <img className='star' src="/img/star-true.svg" alt="star"/>
                <img className='star' src="/img/star-true.svg" alt="star"/>
                <img className='star' src="/img/star-true.svg" alt="star"/>
                <img className='star' src="/img/star-true.svg" alt="star"/>
                <img className='star' src="/img/star-false.svg" alt="star"/>
              </div>
            </div>
            <p className='text'>Были в этом ресторане на день рождения и просто восторг! Атмосфера, обслуживание ...</p>
          </div>
          <div className="card">
            <div className="top">
              <p className='name'>
                Алиса:
              </p>
              <div className='stars'>
                <img className='star' src="/img/star-true.svg" alt="star"/>
                <img className='star' src="/img/star-true.svg" alt="star"/>
                <img className='star' src="/img/star-true.svg" alt="star"/>
                <img className='star' src="/img/star-true.svg" alt="star"/>
                <img className='star' src="/img/star-false.svg" alt="star"/>
              </div>
            </div>
            <p className='text'>Были в этом ресторане на день рождения и просто восторг! Атмосфера, обслуживание ...</p>
          </div>
          <div className="card">
            <div className="top">
              <p className='name'>
                Алиса:
              </p>
              <div className='stars'>
                <img className='star' src="/img/star-true.svg" alt="star"/>
                <img className='star' src="/img/star-true.svg" alt="star"/>
                <img className='star' src="/img/star-true.svg" alt="star"/>
                <img className='star' src="/img/star-true.svg" alt="star"/>
                <img className='star' src="/img/star-false.svg" alt="star"/>
              </div>
            </div>
            <p className='text'>Были в этом ресторане на день рождения и просто восторг! Атмосфера, обслуживание ...</p>
          </div>
        </div>

      </div>
      <input onClick={() => scrollContainerBy(400)} type='image' className={canScrollRight ? 'button' : 'hidden'} src="/img/right-arrow.svg"
             alt="right"/>
    </div>
  );
};

export default Reviews;