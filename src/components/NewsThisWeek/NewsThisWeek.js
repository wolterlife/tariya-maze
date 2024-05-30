import React, {useEffect, useState} from 'react';
import './NewsThisWeek.scss'

const NewsThisWeek = () => {
  const [apiNews, setApiNews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/news/", { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        const shuffled = data.sort(() => 0.5 - Math.random());
        setApiNews(shuffled.slice(0, 4));
      })
      .catch((error) => console.log(error));
  }, []);

  const resBottom = apiNews.slice(0, 2).map((el) =>
    <div className="card" key={el.id}>
      <p className='textTopCard'>{el.title1}</p>
      <div className="content">
        <p className='textMain'>{el.title2}</p>
        <div className="lowerSection">
          {el.description.split('. ').map((el) =>
            <p key={el} className='textPrimary'>{el}</p>)
          }
        </div>
      </div>
    </div>
  )

  const resTop = apiNews.slice(2, 4).map((el) =>
    <div className="card" key={el.id}>
      <p className='textTopCard'>{el.title1}</p>
      <div className="content">
        <p className='textMain'>{el.title2}</p>
        <div className="lowerSection">
          {el.description.split('. ').map((el) =>
            <p key={el} className='textPrimary'>{el}</p>)
          }
        </div>
      </div>
    </div>
  )


  return (
    <div className='newsWeek'>
      <p className='textLarge'>Текущая неделя</p>
      <div className="cardsWeek">
        <img className='imgLeft' src="/img/news-left.svg" alt="image"/>
        <img className='imgRight' src="/img/news-right.svg" alt="image"/>
        <div className="topLine">
          {resTop}
        </div>
        <div className="wrapperBottom">
          <div className="bottomLine">
            {resBottom}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsThisWeek;
