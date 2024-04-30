import React, {useState} from 'react';
import './AdminNews.scss'
import CardNews from "../CardNews/CardNews";

const AdminNews = () => {
  const [showNews, setShowNews] = useState(true)
  const [selectedEdit, setSelectedEdit] = useState({})
  const [inputTitle1, setInputTitle1] = useState('')
  const [inputTitle2, setInputTitle2] = useState('')
  const [inputDescription, setInputDescription] = useState('')
  const arr=[
    {
      title1:'Новое меню',
      title2:'Мы добавили несколько новых блюд',
      description:'Сливочный ризотто с лоосем и шпинатом. \n Темпура из цветной капусты с апельсиновым соусом.\n Греческий салат с жареными кальмарами и лимонным соусом.'

    },
    {
      title1:'История успеха ',
      title2:'Наш главный повар поделился секретами своих лучших блюд',
      description:'Темпура из цветной капусты с апельсиновым соусом. \n Греческий салат с жареными кальмарами и лимонным соусом.'

    },
    {
      title1:'Эксклюзивное событие',
      title2:'Вечер испанской кухни в нашем ресторане',
      description:'Темпура из цветной капусты с апельсиновым соусом. \n Греческий салат с жареными кальмарами и лимонным соусом.'

    },
    {
      title1:'Награды',
      title2:'Наш ресторан отмечен престижной наградой \'Лучшее кулинарное заведение 2023\'',
      description:'Греческий салат с жареными кальмарами и лимонным соусом.'

    }
  ]
  const res = arr.map((el,idx)=><CardNews key={idx} el={el} setNewsFoo={setShowNews} setEditFoo={setSelectedEdit}/>)

  return (
    <div>
      {showNews ?
        <div className="showCards">
          <img onClick={()=>{setShowNews(false); setSelectedEdit({}) }} className='imgPlus' src="/img/icon-plus.svg" alt="plus"/>
          <p className='textAddNews'>Добавить новость</p>
          <div className="newsContainer">
            {res}
          </div>
        </div>
      :
      <div className="editContainer">
        <img onClick={() => setShowNews(true)} className='xIcone' src="/img/x-mark.svg" alt="x"/>
        <div className="title1">
          <p className="text">Заголовок1:</p>
          <textarea
            className='textName'
            name="textName"
            defaultValue={selectedEdit.title1}
            onChange={(v) => setInputTitle1(v.target.value) }
          />
          <p className="textLimit">макс число символов: 40</p>
        </div>
        <div className="title2">
          <p className="text">Заголовок2:</p>
          <textarea
            className='textName'
            name="textName"
            defaultValue={selectedEdit.title2}
            onChange={(v) => setInputTitle2(v.target.value) }
          />
          <p className="textLimit">макс число символов: 40</p>
        </div>
        <div className="descrDiscount">
          <p className="text">Описание:</p>
          <textarea
            className='textDescr'
            name="textDescr"
            defaultValue={selectedEdit.description}
            onChange={(v) => setInputDescription(v.target.value) }
          />
        </div>
        <input className='button' type="button" value='Сохранить'/>
      </div>
      }


    </div>
  );
};

export default AdminNews;
