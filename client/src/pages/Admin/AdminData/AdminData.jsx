import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminData.scss';

function AdminData() {
  const [admin, setAdmin] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/auth/admin-users")
      .then(res => {
        setAdmin(res.data);
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="admin__wrapper">
      {admin.map(admin => (
        <div className="admin col-5" key={admin._id} >
          <img src={admin.image} alt="admin" />
          <div className="admin-data">
            <div><strong>Username: </strong><span>{admin.username}</span></div>
            <div><strong>Email: </strong><span>{admin.email}</span></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AdminData;