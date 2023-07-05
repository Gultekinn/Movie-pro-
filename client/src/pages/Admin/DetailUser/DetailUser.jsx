import React, { useEffect, useState } from 'react';
import './DetailUser.scss';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function DetailUser() {
  const [detailuser, setDetailuser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/auth/users/${id}`)
      .then((res) => {
        setDetailuser(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="user__wrapper">
      {detailuser !== null && (
        <div className="user col-5">
          <img src={detailuser.image} alt="user" />
          <div className="user-data">
            <div>
              <strong>Username: </strong>
              <span>{detailuser.username}</span>
            </div>
            <div>
              <strong>Email: </strong>
              <span>{detailuser.email}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DetailUser;
