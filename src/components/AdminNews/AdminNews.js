import React, {useEffect, useState} from 'react';
import './AdminNews.scss'
import CardNews from "../CardNews/CardNews";

const AdminNews = () => {
  const [showNews, setShowNews] = useState(true)
  const [selectedEdit, setSelectedEdit] = useState({})
  const [inputTitle1, setInputTitle1] = useState('')
  const [inputTitle2, setInputTitle2] = useState('')
  const [inputDescription, setInputDescription] = useState('')
  const [apiNews, setApiNews] = useState([])

  useEffect(() => {
    getNewsFoo()
  }, []);

  useEffect(() => {
    setInputTitle1(selectedEdit.title1)
    setInputTitle2(selectedEdit.title2)
    setInputDescription(selectedEdit.description)
  }, [selectedEdit]);


  function getNewsFoo() {
    fetch("http://localhost:3000/news/", { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        setApiNews(data);
      })
      .catch((error) => console.log(error));
  }

  function dellNewsFoo(id) {
    fetch(`http://localhost:3000/news/${id}`, { method: "DELETE", headers: {
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
      }
    })
      .then((response) => response.json())
      .then((data) => {
        getNewsFoo();
      })
      .catch((error) => console.log(error));
  }

  function addNewsFoo() {
    fetch(`http://localhost:3000/news/`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
      },
      body: JSON.stringify({
        title1: inputTitle1,
        title2: inputTitle2,
        description: inputDescription,
      })
    })
      .then((response) => response.json())
      .then(() => {
        setShowNews(true)
        getNewsFoo()
      })
      .catch((error) => console.log(error));
  }

  function updateNewsFoo() {
    fetch(`http://localhost:3000/news/${selectedEdit.id}`, {
      method: "PUT",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
      },
      body: JSON.stringify({
        title1: inputTitle1,
        title2: inputTitle2,
        description: inputDescription,
      })
    })
      .then((response) => response.json())
      .then(() => {
        setShowNews(true)
        getNewsFoo()
      })
      .catch((error) => console.log(error));
  }

  const res = apiNews.map((el, idx) => <CardNews key={idx} el={el} dellFoo={dellNewsFoo} setNewsFoo={setShowNews} setEditFoo={setSelectedEdit}/>)

  return (
    <div>
      {showNews ?
        <div className="showCards">
          <img onClick={() => {
            setShowNews(false);
            setSelectedEdit({});
          }} className='imgPlus' src="/img/icon-plus.svg" alt="plus"/>
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
              onChange={(v) => setInputTitle1(v.target.value)}
            />
            <p className="textLimit">макс число символов: 40</p>
          </div>
          <div className="title2">
            <p className="text">Заголовок2:</p>
            <textarea
              className='textName'
              name="textName"
              defaultValue={selectedEdit.title2}
              onChange={(v) => setInputTitle2(v.target.value)}
            />
            <p className="textLimit">макс число символов: 40</p>
          </div>
          <div className="descrDiscount">
            <p className="text">Описание:</p>
            <textarea
              className='textDescr'
              name="textDescr"
              defaultValue={selectedEdit.description}
              onChange={(v) => setInputDescription(v.target.value)}
            />
          </div>
          <input onClick={() => {
            if (inputTitle1 && inputTitle2 && inputDescription) {
              if (Object.keys(selectedEdit).length === 0) addNewsFoo();
              else updateNewsFoo()
              setSelectedEdit({})
            }
          }} className='button' type="button" value='Сохранить'/>
        </div>
      }
    </div>
  );
};

export default AdminNews;
