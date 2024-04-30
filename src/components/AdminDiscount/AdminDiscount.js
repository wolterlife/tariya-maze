import React, {useState} from 'react';
import './AdminDiscount.scss'
import CardDiscount from '../CardDiscount/CardDiscount';

const AdminDiscount = () => {
  const [showCards, setShowCards] = useState(true)
  const [selectedEdit, setSelectedEdit] = useState({})
  const [inputName, setInputName] = useState('')
  const [inputDescription, setInputDescription] = useState('')

  const arr = [
    {
      name: "Скидки 30% постоянным клиентам",
      description: "рарара",
    },
    {
      name: "Комплимент от заведения в честь дня рождения",
      description: "fefefefefefe",
    },
    {
      name: "Скидки 30% постоянным клиентам",
      description: "рарара",
    },
    {
      name: "Комплимент от заведения в честь дня рождения",
      description: "рарара",
    }
    ,
    {
      name: "Скидки 30% постоянным клиентам",
      description: "рарара",
    },
    {
      name: "Скидки 30% постоянным клиентам",
      description: "рарара",
    },
    {
      name: "Скидки 30% постоянным клиентам",
      description: "рарара",
    }
  ]

  const res = arr.map((el, idx) => <CardDiscount key={idx} el={el} setCardsFoo={setShowCards}
                                                 setEditFoo={setSelectedEdit}/>)

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
              onChange={(v) => setInputName(v.target.value) }
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

export default AdminDiscount;
