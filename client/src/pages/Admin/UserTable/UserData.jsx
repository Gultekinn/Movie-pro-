import React, { useEffect, useState } from 'react'
import './UserTable.scss'
import { useNavigate } from 'react-router-dom'
import { TiDeleteOutline } from "react-icons/ti";
import { BiMessageSquareDetail } from "react-icons/bi";
import axios from 'axios'


function UserData() {
  const navigate = useNavigate()
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [deleted,setdeleted]=useState(false)
  useEffect(() => {
    axios.get("http://localhost:3000/auth/users").then(res => {
      setData(res.data)
      console.log(res.data);
    })
  }, [deleted])


  //delete
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/auth/users${id}`).then(res => {
      console.log(`${id}'s user has been deleted`);
    })
    setdeleted(true)
  }

  //detail
  const handleDetail = (id) => {
    navigate(`/admin/userdata/${id}`)
  }

  


  return (
    <>
      <div className="table-datas">
        <div className="table__btn">
          <input onKeyUp={(e) => setSearch(e.target.value)} className='searchinp' type="text" placeholder='Search...' />
        </div>
        <table class="table table-striped table-dark">
          <thead>
            <tr>
              <th className="col-3" scope="col">Username</th>
              <th className="col-3" scope="col">Email</th>
              <th className="col-3" scope="col">isAdmin</th>
              <th className="col-3" scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              data.filter(x => x.username.toLowerCase().includes(search.toLowerCase())).map(item => (
                <tr>
                  <th>{item.username}</th>
                  <td>{item.email}</td>
                  <td>{item.isAdmin ? "True" : "False"}</td>
                  <td>
                    <button onClick={() => handleDelete(item._id)}>
                      <TiDeleteOutline className='act-icon-delete'/>
                    </button>
                    <button onClick={() => handleDetail(item._id)}>
                      <BiMessageSquareDetail className='act-icon-detail'/>
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default UserData



