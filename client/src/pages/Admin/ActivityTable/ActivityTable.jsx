import React, { useEffect, useState } from "react";
import "../ActivityTable/ActivityTable.scss";
import { TiDeleteOutline } from "react-icons/ti";
import { FaUserEdit } from "react-icons/fa";
import { BiMessageSquareDetail } from "react-icons/bi";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const ActivityTable = () => {
  const [data, setData] = useState([]);
  const [search,setSearch]=useState("")
  const [deleted,setdeleted]=useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8080/cinemas").then((res) => {
      setData(res.data);
    });
  }, [deleted]);
  //delete
const handleDelete = async (id) => {
  await axios.delete(`http://localhost:8080/cinemas/${id}`).then(res => {
    console.log(`${id}'s element has been deleted`);
  })
  setdeleted(true)
}

  //detail
  const handleDetail = (id) => {
    navigate(`/admin/activity/${id}`)
  }
//update
const handleUpdate = (id) => {
  navigate(`/admin/updateactivity/${id}`)
}
  return (
    <>
      <div className="commons">
        <div className="divv">
          <div>
            <button
              className="addnewproduct"
              onClick={() => navigate("/admin/addactivity")}
            >
              Add New Product
            </button>
          </div>
          <div>
            {" "}
            <input
              onKeyUp={(e) => setSearch(e.target.value)}
              className="searchinp"
              type="text"
              placeholder="Search..."
              id="innpt"
            />
          </div>
        </div>
        <table class="table table-striped table-dark">
          <thead>
            <tr>
              <th className="col-6" scope="col">Title</th>

              <th className="col-6" scope="col">Operation</th>
            </tr>
          </thead>
          <tbody>

            {
              data
              .filter((x) =>
                x.title.toLowerCase().includes(search.toLowerCase())
              )
              .map((item)=>(
                   <tr>
              <th scope="row">{item.title}</th>
              <td>
                <button id="buuton" onClick={()=>handleDelete(item._id)}>
                  <TiDeleteOutline />
                </button>
                <button id="buuton" onClick={()=>handleUpdate(item._id)}>
                 
                  <FaUserEdit />
                </button>
                <button id="buuton" onClick={()=>handleDetail(item._id)}>
                
                  <BiMessageSquareDetail />
                </button>
              </td>
            </tr>         
              ))
            }

          </tbody>
        </table>
      </div>
    </>
  );
};

export default ActivityTable;
