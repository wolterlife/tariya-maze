import React, {useEffect, useState} from 'react';
import './AdminAlert.scss'

const AdminAlert = () => {
  const [apiUsers, setApiUsers] = useState([])

  useEffect(() => {
    getUsersFoo()
  }, []);

  function getUsersFoo() {
    fetch("http://localhost:3000/users/", {method: "GET", headers: {
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
      }})
      .then((response) => response.json())
      .then((data) => {
        setApiUsers(data);
      })
      .catch((error) => console.log(error));
  }

  function dellUserFoo(id) {
    fetch(`http://localhost:3000/users/${id}`, {method: "DELETE", headers: {
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
      }})
      .then((response) => response.json())
      .then((data) => {
        getUsersFoo();
      })
      .catch((error) => console.log(error));
  }

  const res = apiUsers?.map((el) =>
    <div className="line" key={el.id}>
      <p className='textName'>{el.secondName} {el.firstName}</p>
      <p className='textWhite'>{el.phone}</p>
      <input onClick={() => dellUserFoo(el.id)} className='imgDell' type='image' src='/img/icon-delete.svg' alt='dell' />
    </div>
  )

  return (
    <div className='adminAlert'>
      <div className="head">
        <p className='textBrown'>Пользователь</p>
        <p className='textBrown'>Телефон</p>
        <p className='textBrown'>Удалить</p>
      </div>
      <div className="content">
        {res}
      </div>
    </div>
  );
};

export default AdminAlert;
