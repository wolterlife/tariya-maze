import React, {useEffect, useState} from 'react';
import './AdminDiscount.scss'
import CardDiscount from '../CardDiscount/CardDiscount';

const AdminDiscount = () => {
  const [showCards, setShowCards] = useState(true)
  const [selectedEdit, setSelectedEdit] = useState({})
  const [inputName, setInputName] = useState('')
  const [inputDescription, setInputDescription] = useState('')
  const [apiDiscount, setApiDiscount] = useState([]);

  useEffect(() => {
    getDiscountsFoo()
  }, []);

  useEffect(() => {
    setInputName(selectedEdit.name)
    setInputDescription(selectedEdit.description)
  }, [selectedEdit]);


  function getDiscountsFoo() {
    fetch("http://localhost:3000/discounts/", { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        setApiDiscount(data);
      })
      .catch((error) => console.log(error));
  }

  function dellDiscountFoo(id) {
    fetch(`http://localhost:3000/discounts/${id}`, { method: "DELETE" })
      .then((response) => response.json())
      .then((data) => {
        getDiscountsFoo();
      })
      .catch((error) => console.log(error));
  }

  function addDiscountFoo() {
    fetch(`http://localhost:3000/discounts/`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: inputName,
        description: inputDescription,
      })
    })
      .then((response) => response.status)
      .then(() => {
        setShowCards(true)
        getDiscountsFoo()
      })
      .catch((error) => console.log(error));
  }

  function updateDiscountFoo() {
    console.log(true)
    fetch(`http://localhost:3000/discounts/${selectedEdit.id}`, {
      method: "PUT",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: inputName,
        description: inputDescription,
      })
    })
      .then((response) => response.json())
      .then((data) => {
        setShowCards(true)
        getDiscountsFoo()
      })
      .catch((error) => console.log(error));
  }

  const res = apiDiscount.map((el, idx) => <CardDiscount key={idx} el={el} dellFoo={dellDiscountFoo} setCardsFoo={setShowCards} setEditFoo={setSelectedEdit}/>)
  return (
    <div>
      {showCards ?
        <div className="showCards">
          <img onClick={() => {
            setSelectedEdit({})
            setShowCards(false)
          }} className='imgPlus' src="/img/icon-plus.svg" alt="plus"/>
          <p className='textAddDiscount'>Добавить акцию</p>
          <div className="discountsContainer">
            {res}
          </div>
        </div>
        :
        <div className="editContainer">
          <img onClick={() => setShowCards(true)} className='xIcone' src="/img/x-mark.svg" alt="x"/>
          <div className="nameDiscount">
            <p className="text">Акция:</p>
            <textarea
              className='textName'
              name="textName"
              defaultValue={selectedEdit.name}
              onChange={(v) => setInputName(v.target.value)}
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
            if (inputName && inputDescription) {
              if (Object.keys(selectedEdit).length === 0) addDiscountFoo();
              else updateDiscountFoo()
              setSelectedEdit({})
            }
          }} className='button' type="button" value='Сохранить'/>
        </div>
      }

    </div>

  );
};

export default AdminDiscount;
