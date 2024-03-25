import React from 'react';
import './ImgInLine.scss'

const ImgInLine = () => {
  return (
    <div className='containerImgInLine'>
      <img className='img1' src="/img/img-inl1.svg" alt="img1"/>
      <img className='img2' src="/img/img-inl2.svg" alt="img2"/>
      <img className='img2' src="/img/img-inl3.svg" alt="img3"/>
      <img className='img1' src="/img/img-inl4.svg" alt="img4"/>
      <img className='img5' src="/img/img-inl5.svg" alt="img5"/>
    </div>
  );
};

export default ImgInLine;