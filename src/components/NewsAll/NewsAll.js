import React, {useState} from 'react';
import './NewsAll.scss'

const NewsAll = () => {
  const [isOpenAll, setOpenAll] = useState(false);
  const res = [{}, {}, {}, {}, {}, {}, {}, {},{}, {}, {}, {},{}, {}, {}, {}].map((el) =>
    <div key={el.index} className="card"></div>
  )


  return (
    <div className='newsAll'>
      <p className='largeText'>За всё время</p>
      <div className={`container ${isOpenAll && "open"}`}>
        {isOpenAll ? res : res.slice(0, 8)}
        <input
          type='image'
          onClick={() => setOpenAll(!isOpenAll)}
          className={isOpenAll ? 'buttonUp' : 'buttonDown'}
          src="/img/left-arrow.svg" alt="open/close"
        />
      </div>
    </div>
  );
};

export default NewsAll;